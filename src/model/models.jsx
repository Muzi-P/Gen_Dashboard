const defaultModel = {
    opt: (year) => {
        let dataPoints = [
            {
                x: new Date(`${year}-01-01`),
                y: 1010.31
            },
            {
                x: new Date(`${year}-02-01`),
                y: 1012.93
            },
            {
                x: new Date(`${year}-03-01`),
                y: 1014.64
            },
            {
                x: new Date(`${year}-04-01`),
                y: 1015.6
            },
            {
                x: new Date(`${year}-05-01`),
                y: 1015.32
            },
            {
                x: new Date(`${year}-06-01`),
                y: 1014.47
            },
            {
                x: new Date(`${year}-07-01`),
                y: 1013.47
            },
            {
                x: new Date(`${year}-08-01`),
                y: 1012.14
            },
            {
                x: new Date(`${year}-09-01`),
                y: 1010.12
            },
            {
                x: new Date(`${year}-10-01`),
                y: 1008.05
            },
            {
                x: new Date(`${year}-11-01`),
                y: 1007.05
            },
            {
                x: new Date(`${year}-12-01`),
                y: 1007.88
            },
        ]
        return dataPoints
    }
}


export default {
    defaultModel
}