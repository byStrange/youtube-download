link = linkInput
info = getStats
let bubbleParent = document.querySelector('.bubbles');
let delays = [2.2, 3.5, 0.2, 6, 7, 4, 3];
let scales = [2.15, 1.55, .8, 2.15, 3.4, 1];
for (let i = 0; i < 7; i++) {
    let span = document.createElement('span');
    span.setAttribute('style', '--i:' + i + 's')
    span.style.animationDelay = delays[i] + 's'
    span.style.transform = `scale(${scales[i]})`
    span.className = `sp-${i}`;
    bubbleParent.appendChild(span);
}
link.oninput = function () {
    if (link.value.length > 5) {
        info.removeAttribute('disabled')
        download.removeAttribute('disabled')
    } else {
        info.setAttribute('disabled', '')
        download.setAttribute('disabled', '')
    }
}
download.onclick = () => {
    eel.Download_Video(`${link.value}`)(a => console.log(a  ))
}

function concat(text, s) {

    if (text) {
        let me = text.toString();
        if (text.length <= s) {
            me = me.slice(0, s)
            return me
        } else return me
    } else return 'Nothing here'
}
info.onclick = () => {
    res.innerHTML = ''
    eel.get_stats(link.value)(ctx => {
        let some = ['Title', 'Views', 'Length', 'rating', 'Description']
        let vals = typeof ctx == 'object' ? Object.values(ctx) : false;
        let template;
        if (vals) {
            template = makeTemplate(some, ctx)
            console.log(template)
        } else {
            template.push(ctx)
        }
        let ul = document.createElement('ul')
        ul.className = 'items';
        template.forEach(li => {
            ul.innerHTML += li
        })
        console.log(ul)
        if (vals) BLock.style.height = '450px'
        res.appendChild(ul)
    })
}

function makeTemplate(some, ctx) {
    let template = [];
    let vals = Object.values(ctx)
    for (let i = 0; i < vals.length; i++) {
        let item = `<li class="item">
        <span class="pref">${some[i]}</span> <span class="res" data-title="${vals[i]}">${String(vals[i]).length < 15 ? vals[i] : String(vals[i]).slice(0, 15) + '...'}</span>
        </li>`
        console.dir(vals[i])
        console.log(typeof vals[i])
        template.push(item)
    }
    return template
}

/* <ul class="items">
                        <li class="item">
                            <span class="pref">Title</span> <span class="res">Let me done slowly</span>
                        </li>
                        <li class="item">
                            <span class="pref">Title</span> <span class="res">Let me done slowly</span>
                        </li>
                        <li class="item">
                            <span class="pref">Title</span> <span class="res">Let me done slowly</span>
                        </li>
                        <li class="item">
                            <span class="pref">Title</span> <span class="res">Let me done slowly</span>
                        </li>
                    </ul> */