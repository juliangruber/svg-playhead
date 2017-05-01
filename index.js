const html = require('bel')
const component = require('microcomponent')

module.exports = () => {
  const c = component({
    name: 'svg-playhead',
    pure: true
  })
  c.on('render', () => html`
    <g>
      <rect
        x=${c.props.width / 2 - 1}
        y=${c.props.width / 4}
        width=2
        height=${c.props.height - c.props.width / 4}
        fill="hsl(0, 0%, 100%)"
        stroke="black"
      />
      <path
        d="
          M0 0
          H${c.props.width}
          V${c.props.width / 2}
          L${c.props.width / 2} ${c.props.width}
          L0 ${c.props.width / 2}
          Z
        "
        fill="hsla(0, 0%, 90%, 0.8)"
        stroke="black"
        stroke-width="0.5"
      >
    </g>
  `)
  return c
}
