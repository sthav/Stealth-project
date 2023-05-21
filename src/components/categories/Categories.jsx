import React, { useState, useEffect } from 'react';
import './categories.css'
import Table from '../table/Table';
import settings from '../../assets/settings.png'



const Categories = () => {


    const [categoryList, setCategoryList] = useState([]);
    const [labelName, setLabelName] = useState("");
    const [selectedLabels, setSelectedLabels] = useState([]);

    const getCategories = async (url) => {

        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();

            console.log(data[0]['Labels']);

            setCategoryList(data)
        } else {
            console.error("Error")
        }
    }
    useEffect(() => {
        getCategories("https://646312614dca1a661353d0ee.mockapi.io/api/Category");
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])





    const handleLabelToggle = (_id) => {
        // setLabelName(_id)
        console.log(_id);
        if (selectedLabels.includes(_id)) {
            setSelectedLabels(selectedLabels.filter((id) => id !== _id));
            setLabelName('');

        } else {
            setSelectedLabels([...selectedLabels, _id]);
            setLabelName(_id);
        }
    };


    return (
        <div className='mainCategoriesContainer'>
            <div className='categoryC'>
                <div className='categoryHeading'>
                    CATEGORIES
                    <img className='settings' src={settings} alt='settings' />
                </div>
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
                <h6 className='tableTitle'>All items</h6>
                <Table labelName={labelName} />
            </div>
        </div>
    )
}

export default Categories
