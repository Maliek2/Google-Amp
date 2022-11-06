interface PropsType {
  children: JSX.Element
  name: string
}
class Component extends React.Component<PropsType, {}> {
  render() {
    return (
      <h2>
        {this.props.children}
      </h2>
    )
  }
}
// OK
<Component name="foo">
  <h1>Hello World</h1>
</Component>
// Error: children is of type JSX.Element not array of JSX.Element
<Component name="bar">
  <h1>Hello World</h1>
  <h2>Hello World</h2>
</Component>
// Error: children is of type JSX.Element not array of JSX.Element or string.
<Component name="baz">
  <h1>Hello</h1>
  World
</Component>

<p>
        The login can now switch To <a href={isAmp ? '/index?amp=1' : '/index'}>Mobile</a>,
        Sit and stare if it fits, i sits. Mark <a href={isAmp ? '/index?amp=1' : '/index'}>Best News</a>
        territory damn that dog , but step on your keyboard while you're gaming
        and then turn in a circle put butt in owner's face human give me
        attention meow or eat and than sleep on your face. Friends are not food
        jump around on couch, meow constantly until given food, or walk on car
        leaving trail of paw prints on hood and windshield, and spread kitty
        litter all over house, going to catch the red dot today going to catch
        the red dot today. Jump off balcony, onto stranger's head.
        <a href={isAmp ? '/index?amp=1' : '/index'}>My Blog</a>
      
</p>
