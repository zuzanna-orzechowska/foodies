import classes from './page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';

async function Meal({ params }) {
  const resolvedParams = await params;
  const meal = await getMeal(resolvedParams.mealSlug);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <div className={classes.instructions}>
        <p>{meal.instructions}</p>
      </div>
    </>
  );
}

export default function MealDetailsPage({ params }) {
  return <Meal params={params} />;
}
