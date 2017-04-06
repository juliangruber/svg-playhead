const html = require('bel')
const Component = require('nanocomponent')
const morph = require('nanomorph')
const inherits = require('util').inherits

module.exports = Playhead
inherits(Playhead, Component)

function Playhead () {
  this.height = null
  this.width = null
}

Playhead.prototype._update = function (opts) {
  return opts.height !== this.height
    || opts.width !== this.width
}

Playhead.prototype._render = function (opts) {
  const height = this.height = opts.height
  const width = this.width = opts.width

  const main = 'hsl(0, 0%, 100%)'
  const darker = 'hsla(0, 0%, 90%, 0.8)'
  const el = html`
    <g>
      <rect x=${width / 2 - 1} y=${width / 4} width=2 height=${height - width / 4} fill="${main}" stroke="black"/>
      <path d="M0 0 H${width} V${width / 2} L${width / 2} ${width} L0 ${width / 2} Z" fill="${darker}" stroke="black" stroke-width="0.5">
    </g>
  `
  if (this._element) morph(this._element, el)
  else this._element = el
  return el
}
