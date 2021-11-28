import {Wrapper} from './Catalog.styles'
import {CatalogItem} from "../CatalogItem/CatalogItem";
import download from "../../assets/download.jpg"
import {useEffect, useState} from "react";
import {Filter} from "../Filter/Filter";
import {ItemPage} from "../ItemPage/ItemPage";
import axios from "axios";
import {Header} from "../Header/Header";
import BarWave from "react-cssfx-loading/lib/BarWave";


export function Catalog() {

    const [items, update] = useState(null);
    const [view, setView] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8090/vases`)
            .then((result) => {
                update(result.data)
            });
    }, []);

    function updateItems(name, order, price, input) {
        console.log(name, order, price)
        axios.get('http://localhost:8090/vases/param', {
            params:
                {
                    name: name,
                    order: order,
                    price: price
                }
        }).then((result) => {
            console.log(result.data)
            filterInput(result.data, input)
        });
    }

    function filterInput(array, input) {
        update(array.filter(item => item.name.search(input.value) !== -1));
    }

    function toggleView(props) {
        setView(props);
    }

    function returnItems(items) {
        function createImage() {
            return download;
        }

        if (items)
            return <>
                <Filter function={updateItems}/>
                <Wrapper>
                    {items.map(item => (
                        <CatalogItem key={item.name} name={item.name} price={item.price}
                                     image={createImage(item.name)} text={item.description}
                                     function={toggleView}/>))}
                </Wrapper>
            </>
        return <>
            <Filter function={updateItems}/>
            <Wrapper style={{padding: "200px"}}>
                <BarWave color="#000" width="100px" height="100px" duration="2s"/>
            </Wrapper>

        </>
    }

    if (view == null)
        return (returnItems(items))
    return (
        <>
            <Header/>
            <ItemPage item={view}/>
        </>
    )
}