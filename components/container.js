import styles from 'styles/container.module.css'

export default function Container({ children}) {
  return (
    <div className={large ? styles.large : style.default}>)
      {children}
    </div>
)
}
