import styles from "./ItemCard.module.scss";

function Description({ name }: { name: string }) {
   return (
      <div className={styles.description}>
         <h3 className={styles.description__title}>Инверторные кондиционеры серии {name}</h3>
         <p className={styles.description__subtitle}>
            Линейка доступных инверторных сплит-систем MDV, по стоимости сопоставимая с кондиционерами постоянной производительности. Несмотря на то что данная
            модель считается базовой, в ней есть все необходимое для комфорта и удобства пользователя. Система работает на экологичном фреоне R32 и поддерживает
            удаленное управление по Wi-Fi сети (опция). Внутренний блок оснащен двойной системой фильтрации: в комплект входит фильтр высокой плотности и
            фотокаталитический фильтр. Линейка поставляется в комплекте со стильным ИК пультом RG10, поддерживающим функцию Follow me, благодаря которой
            температура в месте нахождения пользователя точно соответствует заданным параметрам.
         </p>
      </div>
   );
}
export default Description;
