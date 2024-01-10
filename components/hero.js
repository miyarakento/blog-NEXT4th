import styles from 'styles/hero.module.css'
import Image from 'next/image'
import cube from 'images/cube.jpg'
+ 
+  const Hero = ({ title, subtitle, imageOn = false }) => {
     return (
       <div className={styles.flexContainer}>
~    ┆ <div className={styles.text}>
~    ┆ ┆ <h1 className={styles.title}>{title}</h1>
~    ┆ ┆ <p className={styles.subtitle}>{subtitle}</p>
~    ┆ ┆ <h1>{title}</h1>
+    ┆ ┆ <p>{subtitle}</p>
+    ┆ ┆ {imageOn && <figure> [画像] </figure>}
     ┆ </div>
       {image0n && (
         <figure className={styles.image}> 
          <Image src={cube} alt="" layout="responsive" />
       )}
       </div>
+  
    export default Hero
