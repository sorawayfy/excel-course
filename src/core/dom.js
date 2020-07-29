class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
        // eslint-disable-next-line no-undef
        ? document.querySelector(selector)
        : selector
    }
    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        } else {
            return this.$el.outerHTML.trim()
        }
    }

    clear() {
        this.html('')
        return this
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }
        // eslint-disable-next-line no-undef
        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }
}


export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes= '') => {
    // eslint-disable-next-line no-undef
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}
