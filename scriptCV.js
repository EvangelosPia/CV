 console.log('Script loaded!');
console.log('matrixBg element:', document.getElementById('matrixBg'));
 const matrixBg = document.getElementById('matrixBg');
        const numberOfColumns = 40;
        
        function createBinaryColumn() {
            const column = document.createElement('div');
            column.className = 'binary-column';
            
            let binaryString = '';
            for (let i = 0; i < 30; i++) {
                binaryString += Math.random() > 0.5 ? '1' : '0';
                if (i % 8 === 7) binaryString += '\n';
            }
            column.textContent = binaryString;
            
            column.style.left = Math.random() * 100 + '%';
            column.style.animationDuration = (Math.random() * 10 + 10) + 's';
            column.style.animationDelay = Math.random() * 5 + 's';
            column.style.opacity = Math.random() * 0.3 + 0.1;
            
            matrixBg.appendChild(column);
            
            setTimeout(() => {
                column.remove();
                createBinaryColumn();
            }, (parseFloat(column.style.animationDuration) + parseFloat(column.style.animationDelay)) * 1000);
        }
        
        for (let i = 0; i < numberOfColumns; i++) {
            setTimeout(() => createBinaryColumn(), i * 200);
        }