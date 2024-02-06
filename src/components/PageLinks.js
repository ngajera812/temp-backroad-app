import { pageLinkes } from "../data"
import PageLink from "./PageLink"
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinkes.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </ul>
  )
}
export default PageLinks
