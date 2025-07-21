document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rubber-calculator-form');
    const resultSection = document.getElementById('result-section');
    const actualRubberWeightResult = document.getElementById('actualRubberWeightResult');
    const totalAmountResult = document.getElementById('totalAmountResult');
    const newsContent = document.getElementById('news-content');

    // Function to update news content (you can fetch this from an API or set it dynamically)
    function updateNews() {
        const today = new Date();

        // Example of dynamic news content (can be extended)
        const currentHour = today.getHours();
        if (currentHour < 12) {
            newsContent.textContent = "เช้านี้ราคาน้ำยางสดทรงตัวจากเมื่อวาน.";
        } else if (currentHour < 17) {
            newsContent.textContent = "อัตราการรับซื้อน้ำยางสดวันนี้มีการเปลี่ยนแปลงเล็กน้อย โปรดตรวจสอบรายละเอียดเพิ่มเติม.";
        } else {
            newsContent.textContent = "ประกาศสำคัญ: ราคาน้ำยางสดอาจมีการปรับในวันพรุ่งนี้.";
        }
    }

    // Initial news update
    updateNews();

    // Set an interval to update news every hour (optional)
    // setInterval(updateNews, 3600000); 

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const pricePerKg = parseFloat(document.getElementById('pricePerKg').value);
        const rawRubberWeight = parseFloat(document.getElementById('rawRubberWeight').value);
        const containerWeight = parseFloat(document.getElementById('containerWeight').value);
        const rubberPercentage = parseFloat(document.getElementById('rubberPercentage').value);

        // Perform calculations
        const netRubberWeight = rawRubberWeight - containerWeight; // น้ำหนักยางพาราหักลบภาชนะ
        const actualRubberWeight = (rubberPercentage / 100) * netRubberWeight; // น้ำหนักยางพาราจริง
        const totalAmount = actualRubberWeight * pricePerKg; // ยอดเงินรวม

        // Display results
        actualRubberWeightResult.textContent = actualRubberWeight.toFixed(2); // Display with 2 decimal places
        totalAmountResult.textContent = totalAmount.toFixed(2); // Display with 2 decimal places

        resultSection.classList.remove('d-none'); // Show the result section
    });
});
