'use strict'
module.exports = (quantity, item) => {
    return quantity > 1 ? `${item}s` : `${item}`
}