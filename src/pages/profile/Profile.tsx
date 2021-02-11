import React, { useContext, useEffect, useState } from 'react'
import { AppStoreContext } from '../../context/AppStoreContext';
import { ProfileWrapper, Table, ValueTd } from './Profile.style'
import InputFilter from "../../components/input-filter/InputFilter";
import { Stock } from '../../types/ModelTypes';

type Prop = {

}

type SortType = 'name' | 'value' | 'previous-value' | 'change';

const Profile: React.FC<Prop> = (props) => {
    const [stockFilter, setStockFilter] = useState('');
    const [sortDesc, setSortDesc] = useState(true);
    const [filteredStocks, setFilteredStocks] = useState<Stock[]>([]);
    const { selectedProfile } = useContext(AppStoreContext);

    const onStockFilterChange = (event: any) => {
        setStockFilter(event.target.value)
    }

    const sortBy = (value: SortType) => {
        let stocks = filteredStocks;
        if (value === 'name') {
            stocks = filteredStocks.sort((a, b) => sortDesc ?
                a.name > b.name ? 1 : -1
                : a.name < b.name ? 1 : -1);
        }
        if (value === 'value') {
            stocks = filteredStocks.sort((a, b) => sortDesc ?
                a.value > b.value ? 1 : -1
                : a.value < b.value ? 1 : -1);
        }
        if (value === 'previous-value') {
            stocks = filteredStocks.sort((a, b) => sortDesc ?
                a.previousValue > b.previousValue ? 1 : -1
                : a.previousValue < b.previousValue ? 1 : -1);
        }

        setFilteredStocks(stocks);
        setSortDesc(!sortDesc);
    }

    useEffect(() => {
        if (!selectedProfile) return;

        if (stockFilter === '') {
            setFilteredStocks(selectedProfile.stocks);
            return;
        }

        const stocks = selectedProfile.stocks.filter(stock => stock.name.toLowerCase().indexOf(stockFilter) !== -1);
        setFilteredStocks(stocks);
    }, [selectedProfile, stockFilter])

    return (
        <>
            <ProfileWrapper>
                {
                    selectedProfile ?
                        <div>
                            <div>
                                <h2>{selectedProfile.name}</h2>
                                <div>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th onClick={() => sortBy('name')}>Name</th>
                                                <th onClick={() => sortBy('value')}>Value</th>
                                                <th onClick={() => sortBy('previous-value')}>Previous value</th>
                                                <th>Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredStocks.map(stock =>
                                                <tr key={stock.id}>
                                                    <td>{stock.name}</td>
                                                    <td>{stock.value}</td>
                                                    <td>{stock.previousValue}</td>
                                                    <ValueTd isPositive={stock.value > stock.previousValue}>{stock.value - stock.previousValue}</ValueTd>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div>
                                <InputFilter filterValue={stockFilter} onFilterValueChange={onStockFilterChange} name={'stockFilter'}></InputFilter>
                            </div>
                        </div>
                        : <></>
                }

            </ProfileWrapper>
        </>
    );
}

export default Profile;