import porscheModel from "./assets/porsche-model.png"
import { motion } from "framer-motion"
import "./App.css"
import Navabar from "./components/Navabar"

function App() {

  return (
    <div className="w-full bg-[#d2dae1]">
      <Navabar />
      <div className="h-screen flex flex-col items-center justify-center gap-0">
        <motion.div
          className="flex flex-col items-center gap-0 mb-[-20px] sm:mb-[-30px] md:mb-[-50px]"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="porsche uppercase text-lg sm:text-xl md:text-2xl">Porsche</p>
          <p className="uppercase text-5xl sm:text-7xl md:text-9xl text-[#af1616]">911 GT3 RS</p>
        </motion.div>
        <motion.div
          className="z-10 sticky top-[30%]"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={porscheModel} alt="porsche model" />
        </motion.div>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, alias fugiat? Quam quos reiciendis ut exercitationem ab magni tempora voluptate, est natus? Repellendus molestias possimus, aspernatur quod officiis explicabo soluta eos dolorem repellat ullam minus tempore facere vero, illum, aut autem animi recusandae quas provident sapiente non eaque numquam. Labore, possimus aperiam? Ullam saepe itaque non quia praesentium, omnis nobis sequi nam repellat expedita officia, quisquam minus repudiandae nemo exercitationem deleniti ducimus nihil temporibus est. Ad, id beatae consequatur placeat fugiat, provident illum quia eaque libero, minus in nemo voluptate voluptas magnam dignissimos impedit assumenda ex quam ipsa. Animi, voluptates ab labore culpa in veniam neque excepturi debitis ipsam beatae deserunt fugit perspiciatis tempore illo. Fugiat quod suscipit natus ipsum rerum quam cupiditate unde molestias, dicta exercitationem vero soluta tenetur, beatae a vitae earum placeat quidem excepturi autem error! Hic excepturi itaque aperiam amet magni, vero quo quis quia eum praesentium assumenda tempora ea et beatae ipsa, voluptatibus dolore tempore. Ratione in cumque a, quas temporibus dolores fugiat quo dolore error autem voluptate alias illum, numquam quod ullam reprehenderit nulla! Voluptatibus aperiam corrupti incidunt nostrum ducimus. Asperiores minus eaque, delectus ea nulla aliquid facilis a libero itaque! Est atque, eius corrupti sed ab doloribus officia, porro quidem, ut aliquam voluptates necessitatibus pariatur quaerat vitae laboriosam ipsa! Et eligendi itaque veniam explicabo magnam quo iste odit est velit rem architecto tenetur recusandae laboriosam beatae temporibus, enim repellat laudantium consequatur! Voluptas maxime earum quia numquam quod voluptate ipsam aliquam culpa deleniti, omnis expedita laborum amet. Odit, magni dolor culpa repudiandae consequatur quisquam molestias, sapiente earum illum tempora nulla amet asperiores sint a. Mollitia veritatis tempora ducimus impedit reiciendis, nobis obcaecati eaque reprehenderit voluptatum similique perspiciatis commodi quae excepturi iure laudantium assumenda magnam atque quaerat, esse neque? Quos eos vel laboriosam, fuga, porro iusto necessitatibus beatae asperiores omnis commodi dolor quaerat? Necessitatibus, vitae assumenda quibusdam eius amet commodi voluptas quas cumque harum dolorum fugiat, provident quisquam ipsam esse veniam, repellendus exercitationem blanditiis! Nam provident atque earum perferendis odit molestiae placeat assumenda, quo fuga tenetur recusandae incidunt, repellat ratione saepe libero unde ipsum ullam quisquam, impedit vel nostrum? Minus repudiandae dicta dolorum, itaque architecto amet obcaecati numquam dolorem aliquam facere corporis illum quia vel a laborum incidunt rerum tempora. Incidunt dignissimos ratione sequi nemo sunt iusto tempore ab quam dolore amet, possimus temporibus accusantium molestias quae vel ullam odio voluptas ducimus, sit delectus fuga tenetur. Mollitia eaque corrupti qui, dolore omnis distinctio enim amet recusandae consectetur quas maxime possimus obcaecati blanditiis sed error vero illum hic animi similique? Nostrum facilis exercitationem accusamus alias aut, iure asperiores dolorum quaerat similique laudantium ducimus, aspernatur doloribus id pariatur rem velit dolores ipsum amet hic numquam ullam cum assumenda expedita odit? Temporibus exercitationem omnis facere assumenda nam. Nostrum corrupti, ducimus beatae doloribus quod, cumque, ab asperiores fugiat temporibus molestiae rem dolorum vitae? Molestiae dolorum numquam dignissimos modi dolor, minima sunt unde amet officia hic perspiciatis optio in odio! Quibusdam possimus fugiat veniam autem dicta ipsum eligendi eos voluptatem?
      </div>
    </div>
  )
}

export default App