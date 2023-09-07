db.sales.aggregate([
    {
        $group: {
            _id: null,
            totalRev: { $sum: { $multiply: ["$quantity", "$price"] } }
        }
    },
    {
        $group: {
            _id: "$product",
            totalQTY: { $sum: "$quantity" }
        }
    },
    {
        $group: {
            _id: "$product",
            totalRev: { $sum: { $multiply: ["$quantity", "$price"] } }
        }
    },
    {
        $sort: { totalRev: -1 }
    },
    {
        $limit: 5
    }

])
