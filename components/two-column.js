import styles from 'styles/two-column.module.css'


export function TwoColumn({ children }) {
	return (
	 <div className={styles.flexContainer}>
		{ children }
	 </div>
      )
}
 
 export function TwoColumnSidebar({ children }) {
   return (
    <div className={styles.sidebar}>
	   {children}
    </div>
     )
 }

 export function TwoColumnsidebar({ children}) {
	 return (
          <div className={styles.sidebar}>
		 {children}
	  </div>
      )
 }

