/**
 * @flow
 * @file Function to render the checkbox table cell
 * @author Box
 */

import React from 'react';
import Checkbox from 'components/checkbox/Checkbox';
import isRowSelectable from './cellRendererHelper';

export default (
    onItemSelect: Function,
    selectableType: string,
    extensionsWhitelist: string[],
    hasHitSelectionLimit: boolean,
): Function => ({ rowData }: { rowData: BoxItem }) => {
    const { name, selected = false } = rowData;

    if (!isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, rowData)) {
        return <span />;
    }

    return (
        <Checkbox
            hideLabel
            label={((name: any): string)}
            name={((name: any): string)}
            isChecked={selected}
            onChange={() => onItemSelect(rowData)}
        />
    );
};