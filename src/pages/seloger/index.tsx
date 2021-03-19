import { ReactElement } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

type Investment = {
    titreoperation: string;
    entreprise: string;
    ville: string;
    annee_de_livraison: number;
};

export const getServerSideProps: GetServerSideProps<{
    investments: Investment[];
}> = async (context) => {
    const res = await fetch('http://localhost:8080/investments');
    const data = await res.json();

    return {
        props: {
            investments: data,
        },
    };
};

export default function SeLoger({
    investments,
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Titre</TableCell>
                        <TableCell align="right">Ville</TableCell>
                        <TableCell align="right">Annee</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {investments.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {row.titreoperation}
                            </TableCell>
                            <TableCell align="right">{row.ville}</TableCell>
                            <TableCell align="right">
                                {row.annee_de_livraison}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
