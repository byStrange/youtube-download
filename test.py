from pytube import YouTube as yt

yt('https://youtu.be/9bZkp7q19f0').streams.get_highest_resolution().download()
# for i in vi:
# print(i, sep='\n=====')

