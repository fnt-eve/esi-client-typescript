#!/bin/bash

cd "src"

convert_maps_and_sets='(function convertMapsAndSetsToPlain(value: any): any {if (typeof value !== "object" || !value) {return value;} if (value instanceof Set) { return Array.from(value).map(item => convertMapsAndSetsToPlain(item)); } if (value instanceof Map) { return Object.fromEntries([...value.entries()].map(([k, v]) => [k, convertMapsAndSetsToPlain(v)])); } if (Array.isArray(value)) { return value.map(it => convertMapsAndSetsToPlain(it)); } return Object.fromEntries(Object.entries(value) .map(([k, v]) => [k, convertMapsAndSetsToPlain(v)])); })'
for f in `find . -name '*.ts' -type f`; do
    if cat "$f" | grep -q 'convertMapsAndSets'; then
        continue
    fi
    sed -i -E "s/JSON\.stringify\((.*)\)/JSON\.stringify(${convert_maps_and_sets}(\1))/g" "$f"
done
