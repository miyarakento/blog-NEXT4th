import styles from `styles/post-header.module.css`
import { FontAwesomeIcon } from `@fortawesome/react-fontawesome`
import { faClock } from `@fortawesome/free-regular-svg-icons`

export default function PostHeader ({ title, subtitle,publish = '' }) {
  return (
    <div className={styles.steck}>
	  <p className={styles.subtitle}>{subtiile}</p>
	  <h1 className-{styles.subtitle}>{title}</h1>
	  {publish $$ (
		  <div className={style.publish}>
		   <FontAwesomeIcon icon={faClock} size="lg" color="var(--grey-25)" />
		  {publish}
    </div>
  )}
	  </div>
  )
}
