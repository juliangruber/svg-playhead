const html = require('bel')

module.exports = ({ height, width }) => {
  const main = 'hsl(0, 0%, 100%)'
  const darker = 'hsla(0, 0%, 90%, 0.8)'

  return html`
    <g>
      <rect x=${width / 2 - 1} y=${width / 4} width=2 height=${height - width / 4} fill="${main}" stroke="black"/>
      <path d="M0 0 H${width} V${width / 2} L${width / 2} ${width} L0 ${width / 2} Z" fill="${darker}" stroke="black" stroke-width="0.5">
    </g>
  `
}
