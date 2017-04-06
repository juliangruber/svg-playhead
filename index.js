const html = require('bel')

module.exports = ({ height, width }) => {
  const main = 'hsl(60, 100%, 80%)'
  const darker = 'hsl(60, 80%, 65%)'

  return html`
    <g>
      <line x1=${width/2} y1=0 x2=${width/2} y2=${height} stroke="${main}" />
      <path d="M0 0 H${width} V${width/2} L${width/2} ${width} L0 ${width/2} Z" fill="${darker}" stroke="black" stroke-width="0.5">
    </g>
  `
}
