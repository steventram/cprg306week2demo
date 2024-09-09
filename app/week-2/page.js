import Heading from "./heading.js";

export default function Page()
{
let a = 5;
let b = 10;
let c = a + b;


    return <main>Hello Page 2, the routing for the different
        pages is done through page.js.
        A folder acts like a page and each folder will
        contain page.js <Heading/>
        <Heading/>
        <Heading/>
        <Heading/>
        <Heading/>
        
        curly braces for javascript and round is for returns, which returns html
        <p>The sum of a and b is {c}.</p>

    </main>;
}