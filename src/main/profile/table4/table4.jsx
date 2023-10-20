import s from "../adminPanel/adminPanel.module.css";
import { React, useState, useEffect } from "react";
import Loader from "../adminPanel/loader.jsx";
import Table from "../adminPanel/table";

import _, { clone, forEach } from "lodash";
import ReactPaginate from "react-paginate";
import TableSearch from "../adminPanel/TableSearch";

function Table4() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const [sortField, setSortField] = useState("");
  const [search, setSearch] = useState("");
  const [row, setRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [id, setId] = useState(null);
  const [countRow, setCountRow] = useState(15);
  const [upd, setUpd] = useState("");

  useEffect(() => {
    async function fetchData() {
      let respons = await fetch("http://127.0.0.1:8000/client/");
      let data = await respons.json();
      setIsLoading(false);
      setData(data);
    }
    fetchData();
  }, [countRow, upd]);

  const onSort = (sortField) => {
    const clonedData = data.concat();
    const sorted = sort === "asc" ? "desc" : "asc";
    const datad = _.orderBy(clonedData, sortField, sorted);
    setData(datad);
    setSort(sorted);
    setSortField(sortField);
  };
  const onRowSelect = (row) => {
    setRow(row);
  };

  const pageChangeHandler = ({ selected }) => {
    setCurrentPage(selected);
  };

  const searchHandler = (search) => {
    setSearch(search);
    setCurrentPage(0);
  };
  const getFilteredData = () => {
    let n = data.filter((item) => {
      return (
        item["email"].toLowerCase().includes(search.toLowerCase()) ||
        item["phone"].toLowerCase().includes(search.toLowerCase()) ||
        item["name"].toLowerCase().includes(search.toLowerCase())
      );
    });
    if (!search || n.length == 0) {
      return data;
    }
    return n;
  };

  const onDelete = async (id) => {
    await fetch(`http://127.0.0.1:8000/client/`, {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setData(
            data.filter((mes) => {
              console.log(mes.id !== id);
              return mes.id != id;
            })
          );
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };
  const handleDelete = () => {
    console.log(id);
    onDelete(id);
  };

  const filteredData = getFilteredData();
  const pageSize = countRow;
  const countPage = Math.ceil(filteredData.length / pageSize);
  const displayData = _.chunk(filteredData, pageSize)[currentPage];

  return (
    <div className={s.wrapper}>
      <div className={s.data}>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Table
              data={displayData}
              onSort={onSort}
              sort={sort}
              sortField={sortField}
              onRowSelect={onRowSelect}
            />
          </div>
        )}
      </div>
      <div className={s.func}>
        <div className={s.buttons}>
          <TableSearch onSearch={searchHandler} />
          <select
            defaultValue="15"
            name="SelectCountRow"
            className={s.formAdd}
            onChange={(e) => setCountRow(e.target.value)}
          >
            <option value="10">10 строк</option>
            <option value="15">15 строк</option>
            <option value="20">20 строк</option>
            <option value="30">30 строк</option>
          </select>
          <div>
            <button onClick={handleDelete} className={s.btn}>
              удалить
            </button>
            <input
              type="text"
              placeholder="Введите id для удаления"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
        </div>
        {data.length > pageSize ? (
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={pageChangeHandler}
            pageRangeDisplayed={5}
            pageCount={countPage}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={s.pagination}
            pageClassName={s.page_item}
            pageLinkClassName={s.pageLink}
            activeClassName={s.active}
            forcePage={currentPage}
          />
        ) : null}
      </div>
      
    </div>
  );
}

export default Table4;
