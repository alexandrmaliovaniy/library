/**
 * @param {string} s1 Исходная строка
 * @param {string} s2 Сравниваемая строка
 * @param {object} [costs] Веса операций { [replace], [replaceCase], [insert], [remove] }
 * @return {number} Расстояние Левенштейна
 */
function levenshtein(s1, s2, costs) {
    var i, j, l1, l2, flip, ch, chl, ii, ii2, cost, cutHalf;
    l1 = s1.length;
    l2 = s2.length;

    costs = costs || {};
    var cr = costs.replace || 1;
    var cri = costs.replaceCase || costs.replace || 1;
    var ci = costs.insert || 1;
    var cd = costs.remove || 1;

    cutHalf = flip = Math.max(l1, l2);

    var minCost = Math.min(cd, ci, cr);
    var minD = Math.max(minCost, (l1 - l2) * cd);
    var minI = Math.max(minCost, (l2 - l1) * ci);
    var buf = new Array((cutHalf * 2) - 1);

    for (i = 0; i <= l2; ++i) {
        buf[i] = i * minD;
    }

    for (i = 0; i < l1; ++i, flip = cutHalf - flip) {
        ch = s1[i];
        chl = ch.toLowerCase();

        buf[flip] = (i + 1) * minI;

        ii = flip;
        ii2 = cutHalf - flip;

        for (j = 0; j < l2; ++j, ++ii, ++ii2) {
            cost = (ch === s2[j] ? 0 : (chl === s2[j].toLowerCase()) ? cri : cr);
            buf[ii + 1] = Math.min(buf[ii2 + 1] + cd, buf[ii] + ci, buf[ii2] + cost);
        }
    }
    return buf[l2 + cutHalf - flip];
}

function GetLowerDistance(target, object) {
    let shift = 0;
    let length = object.length;
    let diff = target.length - object.length;
    let lowest = levenshtein(object, target.slice(shift, shift + length));
    for (let i = 1; i < diff; i++) {
        shift++;
        let lev = levenshtein(object, target.slice(shift, shift + length));
        if (lev < lowest) {
            lowest = lev;
        }
    }
    return lowest;
}

function Compare(title, query) {
    if (title.length > query.length) {
        return GetLowerDistance(title, query);
    } else if (title.length < query.length) {
        return GetLowerDistance(query, title);
    } else {
        return levenshtein(title, query);
    }
}

function ComplexSearch(book, query) {
    let lev = Compare(book.title.toLowerCase(), query.toLowerCase());
    for (let i = 0; i < book.author.length; i++) {
        let newLev = Compare(book.author[i].toLowerCase(), query.toLowerCase());
        lev = lev > newLev ? newLev : lev;
    }

    for (let i = 0; i < book.tags.length; i++) {
        let newLev = Compare(book.tags[i].toLowerCase(), query.toLowerCase());
        lev = lev > newLev ? newLev : lev;
    }
    return lev;
}

function Search(books, query) {
    if (query.length === 0) return books;
    let res = [];
    for (let i = 0; i < books.length; i++) {
        let lev = ComplexSearch(books[i], query);
        let index = lev / query.length;
        if (index < 0.5) {
            books[i].index = index;
            res.push(books[i]);
        }
    }
    res.sort((a, b) => {
        return a.index > b.index;
    })
    return res;
}

export default Search;