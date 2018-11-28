import React from 'react'
import mystyles from '../styles/header.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from 'gatsby'
import './fix.css'


const Header = () => (
  <div
    className={mystyles.headercontainer}
  >
    <div
      className={mystyles.nextcontainer}
    >
      <div
      className={mystyles.logo}
      >
        <AniLink  
        to="/"
        cover
        bg="#262626"
        >
          <svg xmlns='http://www.w3.org/2000/svg' id='Calque_1' viewBox='0 0 1100.2603 578.46808' width='90' height='100%'>
            <g id='g3' transform='translate(-28.6 -43.2)' fill='#fff'>
                <path d='m 156.1,273.9 -127.1,0 0,142.7 84.6,76.2 0,-138.6 45.2,0 c 28.7,0 42.9,13.8 42.9,36 l 0,106 c 0,22.2 -13.4,37.1 -42.9,37.1 l -130.2,0 0,80.7 127,0 c 68.1,0.4 132,-33.7 132,-111.7 l 0,-114 C 288.1,308.7 224.2,273.9 156.1,273.9 l 0,0 z'
                id='path5' />
                <path d='m 701.9,502.3 0,-117.1 c 0,-42.1 75.8,-51.7 98.7,-9.6 l 70,-28.3 C 843,286.8 792.9,269.2 751.2,269.2 c -68.1,0 -135.5,39.4 -135.5,115.9 l 0,117.1 c 0,77.3 67.3,115.9 133.9,115.9 42.9,0 94.1,-21 122.5,-76.2 l -75,-34.4 c -18.3,47.3 -95.2,35.8 -95.2,-5.2 l 0,0 z'
                id='path7' />
                <path d='m 1011.4069,404.66806 c -26.39995,-5.7 -43.99995,-15.3 -45.19995,-31.8 1.5,-39.4 62.39995,-40.9 97.99995,-3.1 l 56.3,-43.2 c -35.2,-42.9 -75,-54.3 -115.9,-54.3 -62.39995,0 -122.79995,35.2 -122.79995,101.8 0,64.7 49.7,99.5 104.5,107.9 27.89995,3.8 58.89995,14.9 58.19995,34.1 -2.3,36.4 -77.29995,34.4 -111.39995,-6.9 l -54.3,50.9 c 31.8,40.9 75,61.6 115.6,61.6 62.39995,0 131.59995,-36 134.29995,-101.8 3.6,-83 -56.8,-104.1 -117.3,-115.2 l 0,0 z'
                id='path9' />
            </g>
            <g id='g19' transform='translate(-28.6 -43.2)' fill='#fff'>
                <path d='m 103.3,43.3 -74.7,0 0,77.1 47.7,43 0,-81.7 27.8,0 c 29.6,0 29.6,37.2 0,37.2 l -18.3,0 0,35.6 18.3,0 c 29.6,0 29.6,37.2 0,37.2 l -75.5,0 0,38.3 74.6,0 c 38.5,0 68.3,-15.4 69.4,-53.6 0,-17.6 -4.8,-30.7 -13.3,-39.8 8.5,-9.1 13.3,-22.2 13.3,-39.8 -1,-38.1 -30.8,-53.5 -69.3,-53.5 z'
                id='path21' />
                <polygon points='529.8,81.7 529.8,230 577.6,230 577.6,81.7 625.7,81.7 625.7,43.3 358.7,43.3 358.7,81.7 406.8,81.7 406.8,230 454.5,230 454.5,81.7'
                id='polygon23' />
                <polygon points='296.5,160.5 296.5,112.8 245.4,112.8 245.4,81.7 341.7,81.7 341.7,43.3 197.6,43.3 197.6,230 341.7,230 341.7,191.7 245.4,191.7 245.4,160.5'
                id='polygon25' />
                <polygon points='741.3,160.5 741.3,112.8 690.1,112.8 690.1,81.7 786.4,81.7 786.4,43.3 642.4,43.3 642.4,230 786.4,230 786.4,191.7 690.1,191.7 690.1,160.5'
                id='polygon27' />
                <path d='m 918.6,166 c 22.5,-7.1 36.5,-26.6 36.5,-61.1 -1,-43.6 -30.8,-61.7 -69.2,-61.7 l -74.5,0 0,186.8 47.6,0 0,-59.2 8.4,0 43.2,59.2 58.7,0 -50.7,-64 z m -31.9,-35.8 -27.7,0 0,-48.5 27.7,0 c 29.6,0 29.6,48.5 0,48.5 z'
                id='path29' />
            </g>
            <path d='m 422.31942,226.64861 c -70.4,0 -140.39998,38.3 -140.39998,116.7 l 0,116 c 0,77.7 70.39998,116.7 141.19998,116.7 70.4,0 140.4,-39 140.4,-116.7 l 0,-116 c 0,-78.1 -70.8,-116.7 -141.2,-116.7 z m 55.1,232.7 c 0,24.5 -27.6,37.1 -54.7,37.1 -27.6,0 -55.1,-11.9 -55.1,-37.1 l 0,-116 c 0,-24.9 26.8,-38.3 53.6,-38.3 27.9,0 56.3,11.9 56.3,38.3 l 0,116 z'
            id='path15-5' fill='#fff' />
          </svg>
        </AniLink>
      </div>
      <nav className={mystyles.nav}>
          <Link 
          to="/"
          className={mystyles.linkWrapper}
          activeClassName={mystyles.active}
          >
            <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' height='60' viewBox='0 0 512 512' width='22' className={mystyles.linkIcon}>
                  <path d='M511.864,221.487c-0.921-11.988-6.455-22.896-15.581-30.716l-44.286-37.96V44.944c0-8.284-6.716-14.999-14.999-14.999 h-59.998c-8.284,0-14.799,6.716-14.799,14.999v30.728l-75.911-64.695c-16.97-14.539-41.603-14.537-58.519-0.043L15.728,190.769 c-18.753,16.068-21.186,44.423-4.866,63.473c12.439,14.465,32.364,19.077,49.35,13.107v229.584 c0,8.284,6.516,14.999,14.799,14.999h361.986c8.284,0,14.999-6.716,14.999-14.999V267.352c17.534,6.2,37.039,1.004,49.167-13.13 C508.983,245.094,512.784,233.468,511.864,221.487z M391.999,59.943h30.199v67.154l-30.199-25.713V59.943z M317.202,481.934 H195.007V361.738h122.195V481.934z M422.198,481.934h-75.197V346.939c0-8.284-6.716-14.999-14.999-14.999H180.007 c-8.284,0-14.799,6.716-14.799,14.999v134.995H90.011V245.775l166.943-141.613l165.245,141.473V481.934z M478.389,234.694 c-5.318,6.198-14.772,7.107-21.158,1.631L266.765,73.061c-5.595-4.797-13.845-4.817-19.464-0.05 C243.242,76.453,55.58,235.643,54.786,236.317c-6.282,5.375-15.782,4.642-21.161-1.615c-5.385-6.285-4.657-15.774,1.569-21.11 L247.238,33.756c5.66-4.848,13.874-4.849,19.53-0.002l209.994,179.795C483.04,218.929,483.767,228.419,478.389,234.694z'
                  fill='#FFF' />
                  <path d='M302.002,179.938h-91.996c-8.284,0-14.799,6.716-14.799,14.999v89.996c0,8.284,6.516,14.999,14.799,14.999h91.996 c8.284,0,14.999-6.716,14.999-14.999v-89.996C317.002,186.653,310.286,179.938,302.002,179.938z M287.203,269.935h-62.198v-59.998 h62.198V269.935z'
                  fill='#FFF' />
                  <circle cx='271.999' cy='406.934' r='14.999' fill='#FFF' />
            </svg>
            <span className={mystyles.link}>Home</span>
          </Link>

          <Link 
          to="/themes/" 
          className={mystyles.linkWrapper}
          activeClassName={mystyles.active}
          >
            <svg xmlns='http://www.w3.org/2000/svg' height='60' viewBox='0 0 512 512' width='22' className={mystyles.linkIcon}>
                <path d='m435.496094 99.632812-134.496094 19.089844v-118.722656c-36.519531 0-263.832031 0-301 0v85.339844l42.011719 20.660156-42.011719 20.660156v205.339844h31v15c0 24.8125 20.1875 45 45 45s45-20.1875 45-45v-15h180v-118.722656l134.480469 19.085937c40.386719 5.773438 76.519531-25.605469 76.519531-66.363281 0-40.710938-36.078125-72.140625-76.503906-66.367188zm-344.496094 202.367188v45c0 8.269531-6.730469 15-15 15s-15-6.730469-15-15v-45h-31v-156.660156l79.988281-39.339844-79.988281-39.339844v-36.660156h121v272zm120 0h-30v-272h30zm228.710938-99.335938-168.710938-23.941406v123.277344h-30v-272h30v123.277344l168.726562-23.941406c22.3125-3.191407 42.273438 14.148437 42.273438 36.664062 0 22.523438-19.964844 39.855469-42.289062 36.664062zm0 0'
                fill='#FFF' />
                <path d='m121 467c0-24.8125-20.1875-45-45-45s-45 20.1875-45 45 20.1875 45 45 45 45-20.1875 45-45zm-60 0c0-8.269531 6.730469-15 15-15s15 6.730469 15 15-6.730469 15-15 15-15-6.730469-15-15zm0 0'
                fill='#FFF' />
            </svg>
            <span className={mystyles.link}>Themes</span>
          </Link>

          <Link 
          to="/plugins/" 
          className={mystyles.linkWrapper}
          activeClassName={mystyles.active}
          >
          <svg xmlns='http://www.w3.org/2000/svg' height='60' viewBox='0 0 512 512' width='22' className={mystyles.linkIcon}>
                <path d='m181.40625 184.816406 63.070312 19.605469-231.304687 231.308594c-17.535156 17.53125-17.535156 46.0625 0 63.597656s46.0625 17.535156 63.597656 0l231.308594-231.308594 19.605469 63.074219 67.46875-95.410156 116.847656 1.492187-69.890625-93.648437 37.53125-110.667969-110.667969 37.527344-93.652344-69.886719 1.496094 116.84375zm-125.835938 293.3125c-5.84375 5.84375-15.351562 5.84375-21.199218 0-5.84375-5.84375-5.84375-15.355468 0-21.199218l116.597656-116.597657 21.199219 21.199219zm137.796876-137.796875-21.199219-21.199219 104.65625-104.65625 16.171875 5.027344 5.027344 16.171875zm170.308593-236.488281 68.0625-23.082031-23.082031 68.0625 42.984375 57.597656-71.863281-.917969-41.496094 58.679688-21.335938-68.628906-68.628906-21.332032 58.679688-41.5-.917969-71.863281zm0 0'
                fill='#FFF' />
                <path d='m389.75 452.539062v-29.980468h29.980469v-29.980469h-29.980469v-29.980469h-29.980469v29.980469h-29.980469v29.980469h29.980469v29.980468zm0 0'
                fill='#FFF' />
                <path d='m149.902344 122.75h29.980468v-29.980469h29.980469v-29.980469h-29.980469v-29.980468h-29.980468v29.980468h-29.980469v29.980469h29.980469zm0 0'
                fill='#FFF' />
                <path d='m44.972656 242.671875c24.796875 0 44.96875-20.171875 44.96875-44.96875s-20.171875-44.972656-44.96875-44.972656-44.972656 20.175781-44.972656 44.972656 20.175781 44.96875 44.972656 44.96875zm0-59.960937c8.265625 0 14.988282 6.726562 14.988282 14.992187s-6.722657 14.988281-14.988282 14.988281-14.992187-6.722656-14.992187-14.988281 6.726562-14.992187 14.992187-14.992187zm0 0'
                fill='#FFF' />
            </svg>
            <span className={mystyles.link}>Plugins</span>
          </Link>

          <Link 
          to="/download/"
          className={mystyles.linkWrapper}
          activeClassName={mystyles.active}
          >
            <span className={mystyles.link}>Download</span>
          </Link>

          <a href="https://discord.gg/D4cAkXX"
          className={mystyles.linkWrapper}
          target="blank"
          >
            <span className={mystyles.link}>Server</span>
          </a> 
          
          <Link 
          to="/getting-started/"
          className={mystyles.linkWrapper}
          activeClassName={mystyles.active}
          >
            <span className={mystyles.link}>Getting Started</span>
          </Link>

          <Link 
          to="/more/" 
          className={mystyles.linkWrapper}
          activeClassName={mystyles.active}
          >
            <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' height='60' viewBox='0 0 512 512' width='22' className={mystyles.linkIcon}>
                <g fill='#FFF'>
                    <path d='M459.375,38.609c0.203-3.941-0.757-7.569-2.752-10.524c-2.986-5.642-8.415-9.074-14.955-9.427 c-29.919-1.627-404.524-1.716-420.457-1.716c-4.928,0-9.199,1.711-12.405,4.951C2.108,26.049-1.122,33.3,0.351,41.019 c4.134,21.792,6.129,44.811,6.276,72.447c0.005,1.473,0.196,2.902,0.586,4.459c0.848,9.442,7.81,16.369,17.108,16.915 c11.527,0.68,76.52,1.366,151.778,2.163c111.228,1.173,249.649,2.635,266.371,4.636c0.776,0.094,1.533,0.142,2.259,0.142 c2.393,0,4.662-0.485,6.739-1.442c7.819-2.204,12.243-8.912,11.293-17.242C459.202,91.748,458.094,64.116,459.375,38.609z M424.895,104.014c-28.381-1.062-135.846-1.925-231.741-2.694c-67.648-0.541-131.946-1.061-150.877-1.528 c-0.5-16.32-1.736-31.74-3.765-46.819l18.349,0.02c82.601,0.084,324.77,0.333,366.13,0.973 C422.792,69.976,423.422,86.449,424.895,104.014z'
                    />
                    <path d='M459.375,190.699c0.203-3.94-0.757-7.568-2.752-10.529c-2.986-5.642-8.415-9.075-14.955-9.427 c-30.062-1.633-416.562-1.716-420.457-1.716c-4.928,0-9.204,1.711-12.405,4.951c-6.698,4.154-9.927,11.408-8.455,19.126 c4.134,21.792,6.129,44.811,6.276,72.445c0.005,1.473,0.196,2.904,0.586,4.458c0.848,9.436,7.805,16.361,17.103,16.92 c11.532,0.681,76.563,1.361,151.862,2.164c111.195,1.168,249.58,2.63,266.297,4.631c0.776,0.097,1.528,0.143,2.249,0.143 c2.402,0,4.667-0.488,6.749-1.442c7.82-2.204,12.243-8.917,11.288-17.24C459.202,243.835,458.094,216.206,459.375,190.699z M424.895,256.099c-28.381-1.062-135.892-1.925-231.822-2.696c-67.616-0.538-131.875-1.056-150.796-1.523 c-0.5-16.331-1.736-31.742-3.765-46.826l20.264,0.02c82.162,0.089,323.012,0.333,364.215,0.972 C422.792,222.061,423.422,238.534,424.895,256.099z'
                    />
                    <path d='M459.375,342.785c0.203-3.946-0.757-7.576-2.752-10.532c-2.986-5.637-8.415-9.069-14.955-9.419 c-29.874-1.631-404.524-1.712-420.457-1.717c-4.928,0-9.204,1.706-12.405,4.946c-6.698,4.158-9.927,11.41-8.455,19.129 c4.134,21.794,6.129,44.812,6.276,72.452c0.005,1.473,0.196,2.904,0.586,4.458c0.848,9.445,7.81,16.361,17.103,16.91 c11.537,0.681,76.609,1.371,151.966,2.163c111.147,1.178,249.481,2.641,266.193,4.642c0.776,0.091,1.528,0.132,2.249,0.132 c2.397,0,4.667-0.482,6.744-1.433c7.819-2.203,12.243-8.916,11.293-17.244C459.202,395.921,458.094,368.292,459.375,342.785z M424.895,408.189c-28.371-1.057-135.79-1.92-231.652-2.691c-67.692-0.544-132.035-1.066-150.966-1.534 c-0.5-16.325-1.736-31.736-3.765-46.828l22.13,0.03c81.738,0.086,321.289,0.335,362.354,0.975 C422.792,374.151,423.422,390.624,424.895,408.189z'
                    />
                </g>
            </svg>
            <span className={mystyles.link}>More</span>
          </Link>
      </nav>

      <nav className={mystyles.mobileNav}>

      <AniLink 
      to="/"
      className={mystyles.linkWrapper}
      activeClassName={mystyles.active}
      cover
      bg="#262626"
      duration={1}
      >
        <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' height='60' viewBox='0 0 512 512' width='22' className={mystyles.linkIcon}>
              <path d='M511.864,221.487c-0.921-11.988-6.455-22.896-15.581-30.716l-44.286-37.96V44.944c0-8.284-6.716-14.999-14.999-14.999 h-59.998c-8.284,0-14.799,6.716-14.799,14.999v30.728l-75.911-64.695c-16.97-14.539-41.603-14.537-58.519-0.043L15.728,190.769 c-18.753,16.068-21.186,44.423-4.866,63.473c12.439,14.465,32.364,19.077,49.35,13.107v229.584 c0,8.284,6.516,14.999,14.799,14.999h361.986c8.284,0,14.999-6.716,14.999-14.999V267.352c17.534,6.2,37.039,1.004,49.167-13.13 C508.983,245.094,512.784,233.468,511.864,221.487z M391.999,59.943h30.199v67.154l-30.199-25.713V59.943z M317.202,481.934 H195.007V361.738h122.195V481.934z M422.198,481.934h-75.197V346.939c0-8.284-6.716-14.999-14.999-14.999H180.007 c-8.284,0-14.799,6.716-14.799,14.999v134.995H90.011V245.775l166.943-141.613l165.245,141.473V481.934z M478.389,234.694 c-5.318,6.198-14.772,7.107-21.158,1.631L266.765,73.061c-5.595-4.797-13.845-4.817-19.464-0.05 C243.242,76.453,55.58,235.643,54.786,236.317c-6.282,5.375-15.782,4.642-21.161-1.615c-5.385-6.285-4.657-15.774,1.569-21.11 L247.238,33.756c5.66-4.848,13.874-4.849,19.53-0.002l209.994,179.795C483.04,218.929,483.767,228.419,478.389,234.694z'
              fill='#FFF' />
              <path d='M302.002,179.938h-91.996c-8.284,0-14.799,6.716-14.799,14.999v89.996c0,8.284,6.516,14.999,14.799,14.999h91.996 c8.284,0,14.999-6.716,14.999-14.999v-89.996C317.002,186.653,310.286,179.938,302.002,179.938z M287.203,269.935h-62.198v-59.998 h62.198V269.935z'
              fill='#FFF' />
              <circle cx='271.999' cy='406.934' r='14.999' fill='#FFF' />
        </svg>
        <span className={mystyles.link}>Home</span>
      </AniLink>

      <AniLink 
      to="/themes/" 
      className={mystyles.linkWrapper}
      activeClassName={mystyles.active}
      cover
      bg="#262626"
      duration={0.7}
      >
        <svg xmlns='http://www.w3.org/2000/svg' height='60' viewBox='0 0 512 512' width='22' className={mystyles.linkIcon}>
            <path d='m435.496094 99.632812-134.496094 19.089844v-118.722656c-36.519531 0-263.832031 0-301 0v85.339844l42.011719 20.660156-42.011719 20.660156v205.339844h31v15c0 24.8125 20.1875 45 45 45s45-20.1875 45-45v-15h180v-118.722656l134.480469 19.085937c40.386719 5.773438 76.519531-25.605469 76.519531-66.363281 0-40.710938-36.078125-72.140625-76.503906-66.367188zm-344.496094 202.367188v45c0 8.269531-6.730469 15-15 15s-15-6.730469-15-15v-45h-31v-156.660156l79.988281-39.339844-79.988281-39.339844v-36.660156h121v272zm120 0h-30v-272h30zm228.710938-99.335938-168.710938-23.941406v123.277344h-30v-272h30v123.277344l168.726562-23.941406c22.3125-3.191407 42.273438 14.148437 42.273438 36.664062 0 22.523438-19.964844 39.855469-42.289062 36.664062zm0 0'
            fill='#FFF' />
            <path d='m121 467c0-24.8125-20.1875-45-45-45s-45 20.1875-45 45 20.1875 45 45 45 45-20.1875 45-45zm-60 0c0-8.269531 6.730469-15 15-15s15 6.730469 15 15-6.730469 15-15 15-15-6.730469-15-15zm0 0'
            fill='#FFF' />
        </svg>
        <span className={mystyles.link}>Themes</span>
      </AniLink>

      <AniLink 
      to="/plugins/" 
      className={mystyles.linkWrapper}
      activeClassName={mystyles.active}
      cover
      bg="#262626"
      duration={0.4}
      >
      <svg xmlns='http://www.w3.org/2000/svg' height='60' viewBox='0 0 512 512' width='22' className={mystyles.linkIcon}>
            <path d='m181.40625 184.816406 63.070312 19.605469-231.304687 231.308594c-17.535156 17.53125-17.535156 46.0625 0 63.597656s46.0625 17.535156 63.597656 0l231.308594-231.308594 19.605469 63.074219 67.46875-95.410156 116.847656 1.492187-69.890625-93.648437 37.53125-110.667969-110.667969 37.527344-93.652344-69.886719 1.496094 116.84375zm-125.835938 293.3125c-5.84375 5.84375-15.351562 5.84375-21.199218 0-5.84375-5.84375-5.84375-15.355468 0-21.199218l116.597656-116.597657 21.199219 21.199219zm137.796876-137.796875-21.199219-21.199219 104.65625-104.65625 16.171875 5.027344 5.027344 16.171875zm170.308593-236.488281 68.0625-23.082031-23.082031 68.0625 42.984375 57.597656-71.863281-.917969-41.496094 58.679688-21.335938-68.628906-68.628906-21.332032 58.679688-41.5-.917969-71.863281zm0 0'
            fill='#FFF' />
            <path d='m389.75 452.539062v-29.980468h29.980469v-29.980469h-29.980469v-29.980469h-29.980469v29.980469h-29.980469v29.980469h29.980469v29.980468zm0 0'
            fill='#FFF' />
            <path d='m149.902344 122.75h29.980468v-29.980469h29.980469v-29.980469h-29.980469v-29.980468h-29.980468v29.980468h-29.980469v29.980469h29.980469zm0 0'
            fill='#FFF' />
            <path d='m44.972656 242.671875c24.796875 0 44.96875-20.171875 44.96875-44.96875s-20.171875-44.972656-44.96875-44.972656-44.972656 20.175781-44.972656 44.972656 20.175781 44.96875 44.972656 44.96875zm0-59.960937c8.265625 0 14.988282 6.726562 14.988282 14.992187s-6.722657 14.988281-14.988282 14.988281-14.992187-6.722656-14.992187-14.988281 6.726562-14.992187 14.992187-14.992187zm0 0'
            fill='#FFF' />
        </svg>
        <span className={mystyles.link}>Plugins</span>
      </AniLink>

      <AniLink 
      to="/download/"
      className={mystyles.linkWrapper}
      activeClassName={mystyles.active}
      cover
      bg="#262626"
      >
        <span className={mystyles.link}>Download</span>
      </AniLink>

      <a href="https://discord.gg/D4cAkXX"
      className={mystyles.linkWrapper}
      target="blank"
      >
        <span className={mystyles.link}>Server</span>
      </a> 

      <AniLink 
      to="/getting-started/"
      className={mystyles.linkWrapper}
      activeClassName={mystyles.active}
      cover
      bg="#262626"
      >
        <span className={mystyles.link}>Getting Started</span>
      </AniLink>

      <AniLink 
      to="/more/" 
      className={mystyles.linkWrapper}
      activeClassName={mystyles.active}
      cover
      bg="#262626"
      duration={0.1}
      >
        <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' height='60' viewBox='0 0 512 512' width='22' className={mystyles.linkIcon}>
            <g fill='#FFF'>
                <path d='M459.375,38.609c0.203-3.941-0.757-7.569-2.752-10.524c-2.986-5.642-8.415-9.074-14.955-9.427 c-29.919-1.627-404.524-1.716-420.457-1.716c-4.928,0-9.199,1.711-12.405,4.951C2.108,26.049-1.122,33.3,0.351,41.019 c4.134,21.792,6.129,44.811,6.276,72.447c0.005,1.473,0.196,2.902,0.586,4.459c0.848,9.442,7.81,16.369,17.108,16.915 c11.527,0.68,76.52,1.366,151.778,2.163c111.228,1.173,249.649,2.635,266.371,4.636c0.776,0.094,1.533,0.142,2.259,0.142 c2.393,0,4.662-0.485,6.739-1.442c7.819-2.204,12.243-8.912,11.293-17.242C459.202,91.748,458.094,64.116,459.375,38.609z M424.895,104.014c-28.381-1.062-135.846-1.925-231.741-2.694c-67.648-0.541-131.946-1.061-150.877-1.528 c-0.5-16.32-1.736-31.74-3.765-46.819l18.349,0.02c82.601,0.084,324.77,0.333,366.13,0.973 C422.792,69.976,423.422,86.449,424.895,104.014z'
                />
                <path d='M459.375,190.699c0.203-3.94-0.757-7.568-2.752-10.529c-2.986-5.642-8.415-9.075-14.955-9.427 c-30.062-1.633-416.562-1.716-420.457-1.716c-4.928,0-9.204,1.711-12.405,4.951c-6.698,4.154-9.927,11.408-8.455,19.126 c4.134,21.792,6.129,44.811,6.276,72.445c0.005,1.473,0.196,2.904,0.586,4.458c0.848,9.436,7.805,16.361,17.103,16.92 c11.532,0.681,76.563,1.361,151.862,2.164c111.195,1.168,249.58,2.63,266.297,4.631c0.776,0.097,1.528,0.143,2.249,0.143 c2.402,0,4.667-0.488,6.749-1.442c7.82-2.204,12.243-8.917,11.288-17.24C459.202,243.835,458.094,216.206,459.375,190.699z M424.895,256.099c-28.381-1.062-135.892-1.925-231.822-2.696c-67.616-0.538-131.875-1.056-150.796-1.523 c-0.5-16.331-1.736-31.742-3.765-46.826l20.264,0.02c82.162,0.089,323.012,0.333,364.215,0.972 C422.792,222.061,423.422,238.534,424.895,256.099z'
                />
                <path d='M459.375,342.785c0.203-3.946-0.757-7.576-2.752-10.532c-2.986-5.637-8.415-9.069-14.955-9.419 c-29.874-1.631-404.524-1.712-420.457-1.717c-4.928,0-9.204,1.706-12.405,4.946c-6.698,4.158-9.927,11.41-8.455,19.129 c4.134,21.794,6.129,44.812,6.276,72.452c0.005,1.473,0.196,2.904,0.586,4.458c0.848,9.445,7.81,16.361,17.103,16.91 c11.537,0.681,76.609,1.371,151.966,2.163c111.147,1.178,249.481,2.641,266.193,4.642c0.776,0.091,1.528,0.132,2.249,0.132 c2.397,0,4.667-0.482,6.744-1.433c7.819-2.203,12.243-8.916,11.293-17.244C459.202,395.921,458.094,368.292,459.375,342.785z M424.895,408.189c-28.371-1.057-135.79-1.92-231.652-2.691c-67.692-0.544-132.035-1.066-150.966-1.534 c-0.5-16.325-1.736-31.736-3.765-46.828l22.13,0.03c81.738,0.086,321.289,0.335,362.354,0.975 C422.792,374.151,423.422,390.624,424.895,408.189z'
                />
            </g>
        </svg>
        <span className={mystyles.link}>More</span>
      </AniLink>
      </nav>
    </div>
  </div>
)

export default Header
