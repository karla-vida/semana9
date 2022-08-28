import { ProdutosSelecionadosContext } from "./ProdutosSelecionadosContext";
import PropTypes from 'propTypes';

export const ProdutosSelecionadosProvider = ({ children }) => {
    const [produtosSelecionados, setProdutosSelecionados] = useState ([]);
    const isSelecionado = (id) => {
        return ProdutosSelecionados.some((item) => item === id);
      };
    
      const handleSelecionar = (produto) => {
        if (isSelecionado(produto.id)) {
          setProdutosSelecionados(ProdutosSelecionados.filter((item) => item.id !== produto.id));
          return;
        };
    
        setProdutosSelecionados([...ProdutosSelecionados, produto]);
      };
    return (
    <ProdutosSelecionadosContext.Provider 
    value={{produtosSelecionados, setProdutosSelecionados, handleSelecionar}}
    > 
    {children}
    </ProdutosSelecionadosContext.Provider>
    );
    };

    ProdutosSelecionadosProvider.propTypes = {
        children:PropTypes.node,
    }