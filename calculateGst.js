const calculateGSTBill = (amount) => {
    let gst;
    if(amount <= 5000) {
        gst = 0.18;
    } else if(amount <= 10000) {
        gst = 0.20;
    } else if (amount <= 20000) {
        gst = 0.25;
    } else {
        gst = 0.28;
    }
    const gstAmount = amount * gst;
    return {
        gstAmount : gstAmount.toFixed(3),
    }
};

const amount = 10000;
const res = calculateGSTBill(amount);
console.log("GST Amount:" + res.gstAmount);