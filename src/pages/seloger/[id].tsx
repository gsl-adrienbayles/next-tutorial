import { ReactElement } from 'react';
import { useRouter } from 'next/router';

export default function BestDeveloppersOfTheWorld(): ReactElement {
    const { query } = useRouter();

    console.log(query.id);

    return <div>BestDeveloppersOfTheWorld</div>;
}
