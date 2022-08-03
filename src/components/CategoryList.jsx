import { CategoryItem } from './CategoryItem';
import {Preloader} from "./Preloader";
import {NavMenu} from "./NavMenu";

function CategoryList({catalog = []}) {

    return (
        <div className='row offset80'>
            <div className = "col s10">

            {
                catalog.length ? (
                   <>
                   <div className='list'>
                       {catalog.map((el) => (
                          <CategoryItem key = {el.idCategory} {...el} />
                       ))}
                   </div>
                   </>
                ) : (
                   <>
                   <span className="nothing"> Sorry, nothing was found. Try other search options </span>
                   <Preloader />
                   </>
                )
            }
        </div>
            <div className = "col s2">
                <NavMenu catalog={catalog}/>
            </div>
        </div>
    );
}

export { CategoryList };
