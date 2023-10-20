import s from "../adminPanel/adminPanel.module.css";
import { React, useState, useEffect } from "react";
import Loader from "../adminPanel/loader.jsx";
import Table from "../adminPanel/table";
import _, { clone, forEach } from "lodash";
import ReactPaginate from "react-paginate";
import TableSearch from "../adminPanel/TableSearch";

function Table2() {
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
      let respons = await fetch("http://127.0.0.1:8000/cards/");
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
        item["name"].toLowerCase().includes(search.toLowerCase()) ||
        item["discription"].toLowerCase().includes(search.toLowerCase())
      );
    });
    if (!search || n.length == 0) {
      return data;
    }
    return n;
  };

  const onDelete = async (id) => {
    await fetch(`http://127.0.0.1:8000/cards/`, {
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

  const onAdd = async (name, discription, url, type) => {
    await fetch(`http://127.0.0.1:8000/cards/`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        discription: discription,
        url: url,
        type: type,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          return res.json();
        }
      })
      .then(() => {
        setUpd(new Date());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnSubmitAdd = (e) => {
    e.preventDefault();
    onAdd(
      e.target.name.value,
      e.target.discription.value,
      e.target.url.value,
      e.target.type.value
    );
    e.target.name.value = "";
    e.target.discription.value = "";
    e.target.url.value = "";
    e.target.type.value = "";
  };
  const onPut = async (id, name, discription, url, type) => {
    await fetch(`http://127.0.0.1:8000/cards/`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: name,
        discription: discription,
        url: url,
        type: type,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          return res.json();
        }
      })
      .then(() => {
        setUpd(new Date());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnSubmitPut = (e) => {
    e.preventDefault();
    onPut(
      e.target.idPut.value,
      e.target.namePut.value,
      e.target.discriptionPut.value,
      e.target.urlPut.value,
      e.target.typePut.value
    );
    setRow("");
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
        <div className={s.addStr}>
          <form onSubmit={handleOnSubmitAdd} className={s.formAddMain}>
            <input
              type="text"
              placeholder="Название"
              name="name"
              className={s.formAdd}
            />
            <input
              type="text"
              placeholder="Описание"
              name="discription"
              className={s.formAdd}
            />
            <input
              type="text"
              placeholder="Картинка"
              name="url"
              className={s.formAdd}
            />

            <select name="type" className={s.formAdd}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <button className={s.btn} onSubmit={handleOnSubmitAdd}>
              Добавить
            </button>
          </form>
        </div>

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
      {row ? (
        <div>
          <form onSubmit={handleOnSubmitPut} className={s.formPut}>
            <input
              type="number"
              value={row["id"]}
              readOnly
              name="idPut"
              placeholder="ID"
            />
            <input
              type="text"
              defaultValue={row["name"]}
              name="namePut"
              placeholder="Название"
            />
            <input
              type="text"
              defaultValue={row["discription"]}
              name="discriptionPut"
              placeholder="Описание"
            />
            <input
              type="text"
              defaultValue={row["url"]}
              name="urlPut"
              placeholder="Картинка"
            />

            <input
              type="number"
              defaultValue={row["type"]}
              name="typePut"
              placeholder="тип"
            />
            <button onSubmit={handleOnSubmitPut}>Изменить</button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Table2;
