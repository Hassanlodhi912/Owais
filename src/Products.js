import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Products = () => {

const FetchProducts =async()=>{

}
  return <Wrapper>
  
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
