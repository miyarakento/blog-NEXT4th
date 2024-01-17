import styles from 'styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder0pen } from '@fortawesome/free-regular-svg-icons'

const PostCategories = ({ categories }) => {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolder0pen} />
        <span className='sr-only'>Categories</span>
      </h3>
      <ul className={styles.list}>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link legacyBehavior href={`/blog/category/${slug}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default PostCategories
