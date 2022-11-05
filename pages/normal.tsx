export default function NormalPage() {
  return 
<p>
When a component suspends, it activates the fallback of only the nearest parent Suspense boundary. This means you can nest multiple Suspense boundaries to create a loading sequence. Each Suspense boundary’s fallback will be filled in as the next level of content becomes available.

To illustrate, consider the following example:



I'm just a normal old page, no AMP for me



</p>
}
