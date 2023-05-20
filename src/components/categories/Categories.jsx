
import React, { useState, useEffect } from 'react';
import './categories.css'
import Table from '../table/Table';
const Categories = () => {


    

    const [categoryList, setCategoryList] = useState([]);
    const[labelName, setLabelName] = useState("");

    const getCategories = async (url) => {

        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            // setCategoryList(data[""])
            // console.log(data[0]['Labels'].length );
            console.log(data[0]['Labels']);

            setCategoryList(data)

            // for(var i=0;i<data.length;i++){
            //     console.log(data[i]['Name']);
            //     setCategoryList(data[i]['Name']);
            //     if( !(data[i]['Labels'].length === 0)){

            //         for(var j=0; j< data[i]['Labels'].length; j++)
            //         {
            //                console.log(data[i]['Labels'][j]['Name']);

            //         }
            //     }

            // }
        } else {
            console.error("Error")
        }
    }
    useEffect(() => {
        getCategories("https://646312614dca1a661353d0ee.mockapi.io/api/Category");
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const [selectedLabels, setSelectedLabels] = useState([]);

    const handleLabelToggle = (id) => {
        setLabelName(id)
        console.log(id);
        // if (selectedLabels.includes(labelId)) {
        //     setSelectedLabels(selectedLabels.filter((id) => id !== labelId));
        //     console.log(true);
        //     console.log(id);
        // } else {
        //     setSelectedLabels([...selectedLabels, labelId]);
        //     console.log(false);
        // }
    };


    return (
        <div className='mainCategoriesContainer'>
            <div className='categoryC'>
            {categoryList.map((category) => (
                <div key={category.id}>
                    <h3>{category.Name}</h3>
                    {category.Labels.length > 0 && (
                        <ul>
                            {category.Labels.map((label) => (
                                <li key={label.id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedLabels.includes(label.Name)}
                                            onChange={() => handleLabelToggle(label.Name)}
                                        />
                                        {label.Name}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
           
            </div>
            <div className='tableContainer'>
                <div className='tableTitle'>All items</div>
                 <Table labelName={labelName}/>
            </div>
        </div>
    )
}

export default Categories
