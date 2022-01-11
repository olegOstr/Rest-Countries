import React from 'react';
import styled from 'styled-components';

const Pagination = ({countPerPage, totalCountries, paginate, currentPage}) => {

    const List = styled.ul`
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    `
    const ListItem = styled.li`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      margin: 6px 3px 0 3px;

      background-color: var(--color-ui);

      box-shadow: var(--shadow);
      border-radius: 0.2rem;
      font: var(--md-font);

      cursor: pointer;

      color: ${props => props.active ? 'hsl(8,100%,50%)' : ''};
    `

    const pageNumbers = []

    for (let i = 0; i < Math.ceil(totalCountries / countPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    const paginatePage = (el) => {
        paginate(el)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <List>
                {
                    pageNumbers.map((num) =>
                        <ListItem
                            key={num}
                            onClick={() => paginatePage(num)}
                            active={currentPage === num ? 'active' : null}
                        >
                            {num}
                        </ListItem>
                    )
                }
            </List>
        </>
    );
};

export default Pagination;