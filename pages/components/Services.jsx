import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'

export default function Services() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <div id="section-services" className="flex flex-col text-left mt-20">
      <h3 class="py-2 pl-3 pr-4 text-color">{t.services}</h3>
      <p> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia minima voluptatem, unde expedita enim ab soluta adipisci quas dignissimos atque ex nesciunt reprehenderit sunt dolorum odit impedit vel beatae?
        Veritatis eius delectus nihil ipsam? Sint minus illo blanditiis asperiores amet perspiciatis aperiam maiores, nemo accusamus laborum, voluptate, eveniet facilis! Fuga ratione illo ad porro fugiat corrupti delectus voluptatem animi!
        Natus doloribus in recusandae quidem asperiores quaerat, consectetur nesciunt dignissimos mollitia nobis accusantium temporibus suscipit eum accusamus rem inventore animi sapiente aperiam repudiandae esse ducimus. Illo, rerum. Iure, quos quae.
        Veniam eos, numquam totam doloribus distinctio excepturi enim. Obcaecati rem ullam culpa debitis possimus perferendis rerum repellendus, neque deleniti ea id ab animi qui facilis hic quas. Quae, repellat ea!
        Est deserunt eveniet atque nihil quos dolore ullam provident quaerat accusantium. Et reprehenderit earum sapiente quod iste a corporis voluptatum minima delectus laudantium fuga molestiae, praesentium ipsum aut cum? Reiciendis.
        Neque maiores commodi corporis odio in natus fugiat perferendis voluptate? In beatae laudantium sed eaque nisi reiciendis harum, asperiores odit tempore, mollitia nihil velit corrupti tempora cum quae eius possimus.
        Recusandae tempore pariatur praesentium perferendis delectus harum voluptatum ab cupiditate molestias. Nihil sapiente rerum ea. Quod magni architecto quibusdam, at beatae ea suscipit dolores aliquam nulla quia recusandae nam reprehenderit?
        Fuga eaque quos inventore quidem assumenda placeat veritatis, porro ipsa quas quaerat dicta aperiam, similique quod ab eligendi omnis eum mollitia qui harum. Mollitia eius, doloremque veniam earum rem officiis.
        Eum dolorem, quae error magni nisi distinctio placeat autem culpa quas eveniet officiis ad. Neque itaque eos velit corporis fuga natus tenetur porro, tempora a fugiat? Sequi sapiente iure illo.
        Commodi numquam quo, nisi magnam quis optio at sunt enim maxime recusandae ratione tempore dolorum eaque. Debitis fugit at saepe ab repellat. Id enim, dolore dolorum laudantium incidunt assumenda totam.
      </p>
    </div>
  ) 
}