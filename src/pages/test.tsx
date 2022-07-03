import P from '../components/P.styles'
import Button from '../components/Button.styles'
import FadeButton from '../components/FadeButton'
import FadeTitle from '../components/FadeTitle'
import CodeBlock from '../components/Code/block'
import Container from '../styles/test.styles'


const Test = () =>
  <Container>
    <h1>Test</h1>

    <P>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore eaque laudantium velit iste debitis obcaecati aperiam repudiandae at nisi doloremque sit, molestiae porro sequi libero consequuntur earum rem dolores.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iusto asperiores quae laboriosam dolores ad pariatur fugit nemo est, neque reprehenderit quod vel aspernatur, eum aperiam, enim corporis culpa quaerat!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, veniam commodi? Atque ipsum, excepturi asperiores nulla exercitationem harum architecto recusandae quos aliquam consequatur, fugiat aperiam, fugit cum totam expedita ducimus?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id temporibus rem deleniti, quam delectus iure earum consectetur, alias reprehenderit ab blanditiis maxime fugit, repudiandae harum iste velit mollitia molestias!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus recusandae alias dolores rem quibusdam asperiores error vel, voluptatibus, eius nulla modi optio repellat officiis expedita delectus consequatur obcaecati. Placeat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quia sed aut eos consequatur dolore illum, cupiditate ratione, dolorum temporibus odit nisi quaerat, commodi mollitia eligendi ea totam nihil nemo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nobis saepe nostrum esse beatae reprehenderit excepturi, facere reiciendis aut, temporibus, fugit culpa tempora aliquid alias. Labore numquam atque nam unde.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam consequuntur voluptate? Cumque culpa exercitationem amet itaque numquam fugit! Officia, porro! Asperiores sapiente accusantium ipsum impedit autem tempore consectetur quisquam!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique sint voluptas rem repellendus, voluptate nihil et adipisci facere explicabo animi expedita dicta iusto ea perspiciatis repellat asperiores sapiente obcaecati.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos ullam corporis esse illum fugit maiores, doloremque, nemo, cum voluptas impedit deleniti repellendus porro sit laudantium asperiores quod voluptatibus cupiditate.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, eaque in quia tenetur tempora aperiam dolorem voluptatum assumenda iste doloremque ipsam similique, quaerat autem corrupti minima enim optio vel qui.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione illum nulla consectetur consequuntur at quisquam quaerat aut quas deleniti modi eius quasi aliquam voluptate quos repellat quod iste, nisi reprehenderit!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum! Eum reprehenderit, minus autem enim odio, molestiae optio iste illo nulla commodi ad praesentium ratione nostrum velit deleniti beatae inventore!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem velit a est hic cupiditate earum, laborum, sint, dolor soluta odit adipisci! Voluptatem maiores corporis voluptatibus natus, consequuntur dignissimos doloremque dolorem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id cum? Accusamus veritatis aliquid sunt! Excepturi autem voluptates libero aliquid quod totam hic, nihil sit accusantium sunt, harum inventore blanditiis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facere. Voluptates soluta culpa sequi expedita, ducimus maxime, officiis asperiores inventore pariatur, nam quaerat deserunt! Perferendis quaerat tempore consectetur dignissimos dolorem.
    </P>

    <Button color='primary'>Button primary</Button>
    <Button color='primary' outline>Button outline primary</Button>

    <Button color='success'>Button success</Button>
    <Button color='success' outline>Button outline success</Button>

    <Button color='error'>Button error</Button>
    <Button color='error' outline>Button outline error</Button>

    <Button color='warning'>Button warning</Button>
    <Button color='warning' outline>Button outline warning</Button>

    <FadeButton text='Fade button'>
      <P>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem repudiandae nesciunt quisquam est eaque maxime impedit, ipsum dolorem accusamus inventore, rerum, molestiae commodi doloremque maiores! Expedita explicabo nisi cum animi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque assumenda sequi quod totam adipisci officiis error, dolorem maxime? Dignissimos commodi dolor, temporibus pariatur illum eum. Ad repellendus ipsum explicabo?
      </P>
    </FadeButton>

    <FadeTitle text='Fade title'>
      <P>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem repudiandae nesciunt quisquam est eaque maxime impedit, ipsum dolorem accusamus inventore, rerum, molestiae commodi doloremque maiores! Expedita explicabo nisi cum animi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque assumenda sequi quod totam adipisci officiis error, dolorem maxime? Dignissimos commodi dolor, temporibus pariatur illum eum. Ad repellendus ipsum explicabo?
      </P>
    </FadeTitle>

    <CodeBlock language='javascript' code={ 'function foo() {\n\t// testing...\n}' }/>
  </Container>


export default Test