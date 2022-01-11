import eel
from pytube import YouTube

eel.init("web")

# https://www.youtube.com/watch?v=TkiDouBnDrU
# #Title of video
# print(“Title: “,yt.title)
# #Number of views of video
# print(“Number of views: “,yt.views)
# #Length of the video
# print(“Length of video: “,yt.length,”seconds”)
# #Description of video
# print("Description: ",yt.description)
# #Rating
# print("Ratings: ",yt.rating)

@eel.expose
def Download_Video(link):
    url = YouTube(link)
    video = url.streams.get_highest_resolution()
    obj = {
        'title': url.title,
        'views': url.views,
        'len': url.length,
        'rating': url.rating,
        'desc': url.description
    }
    video.download( )
    return obj


@eel.expose
def get_stats(link):
    try:
        url = YouTube(link)
        res = {
            'title': url.title,
            'views': url.views,
            'len': url.length,
            'rating': url.rating,
            'desc': url.description
        }
        return res
    except:
        return 'please make sure your link is correct'


eel.start('index.html')
