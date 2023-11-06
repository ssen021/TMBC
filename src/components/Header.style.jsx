import styled from "styled-components";
import { Link } from "react-router-dom";

export const BannerInfo = styled.div`
  background-color: rgb(21, 21, 73);
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const StyledLink = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`;
