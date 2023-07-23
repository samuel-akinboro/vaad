import Header from './components/Header'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import productImageOne from '../../assets/images/product1.png'
import productImageTwo from '../../assets/images/product2.png'
import productImageThree from '../../assets/images/product3.png'
import productImageFour from '../../assets/images/product4.png'
import productImageFive from '../../assets/images/product5.png'
import productImageSix from '../../assets/images/product6.png'
import bannerOne from '../../assets/images/banner-1.png'
import Banner from './components/Banner'
import Factor from './components/Factor'
import Banner2 from './components/Banner2'
import Consultation from './components/Consultation'
import Subscribe from './components/Subscribe'


const productsData = [
  {
    title: 'Iyanaipaja, Festac city',
    description: '16b Opebi Avenue, Providence mona..',
    size: '23*3 Meters',
    type: 'Static billboard',
    img: productImageOne,
  },
  {
    title: 'Iyanaipaja, Festac city',
    description: '16b Opebi Avenue, Providence mona..',
    size: '23*3 Meters',
    type: 'Static billboard',
    img: productImageTwo,
  },
  {
    title: 'Iyanaipaja, Festac city',
    description: '16b Opebi Avenue, Providence mona..',
    size: '23*3 Meters',
    type: 'Static billboard',
    img: productImageThree,
  },
  {
    title: 'Iyanaipaja, Festac city',
    description: '16b Opebi Avenue, Providence mona..',
    size: '23*3 Meters',
    type: 'Static billboard',
    img: productImageFour,
  },
  {
    title: 'Iyanaipaja, Festac city',
    description: '16b Opebi Avenue, Providence mona..',
    size: '23*3 Meters',
    type: 'Static billboard',
    img: productImageFive,
  },
  {
    title: 'Iyanaipaja, Festac city',
    description: '16b Opebi Avenue, Providence mona..',
    size: '23*3 Meters',
    type: 'Static billboard',
    img: productImageSix,
  }
]

const index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductSection data={[...productsData.slice(0, 3)]} />
      <ProductSection data={[...productsData.slice(3)]} />
      <Banner image={bannerOne} />
      <Factor />
      <Banner2 />
      <Consultation />
      <Subscribe />
    </div>
  )
}

export default index