import { useContext } from 'react';
import {ProdutosSelecionadosContext} from '@contexts';

export const useProdutosSelecionados = () => {
    const context = useContext(ProdutosSelecionadosContext);

    return context;
}