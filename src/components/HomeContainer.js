import React, { useState } from "react";
import { Card, InputNumber, PageHeader, Tabs } from "antd";
import TableEditor from "./TableEditor";
import HelpComponent from "./HelpComponent";
import PriceCalculator from "./PriceCalculator";

const { TabPane } = Tabs;

const HomeContainer = () => {
  const [alcohol, setAlcohol] = useState(loadData("alcohol"));
  const [food, setFood] = useState(loadData("food"));
  const [softDrinks, setSoftDrinks] = useState(loadData("softDrinks"));
  const [price, setPrice] = useState(loadPrice());

  const [tobaccoProducts, setTobaccoProducts] = useState(
    loadData("tobaccoProducts")
  );

  function loadData(name) {
    try {
      let parseData = JSON.parse(localStorage.getItem(name));
      if (!parseData) {
        return undefined;
      }
      return parseData;
    } catch (error) {
      console.log({ error: true, message: error });
      localStorage.removeItem(name);
      return undefined;
    }
  }

  function loadPrice() {
    const parseData = localStorage.getItem("Price");
    if (!parseData) {
      localStorage.setItem("Price", "0");
      return 0;
    }
    return parseInt(parseData);
  }

  return (
    <div className={"HomeContainer"}>
      <PageHeader className="home-page-header" title="Home" />
      <PriceCalculator price={price} setPrice={setPrice} />
      <Card>
        <Tabs>
          {alcohol && (
            <TabPane tab={"Alcohol"} key={"1"}>
              <TableEditor use={"alcohol"} price={price} setPrice={setPrice} />
            </TabPane>
          )}
          {food && (
            <TabPane tab={"Food"} key={"2"}>
              <TableEditor use={"food"} price={price} setPrice={setPrice} />
            </TabPane>
          )}
          {softDrinks && (
            <TabPane tab={"Soft drinks"} key={"3"}>
              <TableEditor
                use={"softDrinks"}
                price={price}
                setPrice={setPrice}
              />
            </TabPane>
          )}
          {tobaccoProducts && (
            <TabPane tab={"Tobacco products"} key={"4"}>
              <TableEditor
                use={"tobaccoProducts"}
                price={price}
                setPrice={setPrice}
              />
            </TabPane>
          )}
          {!alcohol && !food && !softDrinks && !tobaccoProducts && (
            <TabPane tab={"Help"} key={"5"}>
              <HelpComponent />
            </TabPane>
          )}
        </Tabs>
      </Card>
    </div>
  );
};

export default HomeContainer;
