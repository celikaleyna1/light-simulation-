self.onDataUpdated = function () {
  console.log("Data geldi mi?", self.ctx.data);
  
  let redValue = false;
  let greenValue = false;
  let yellowValue = false;
  
 
  if (self.ctx.data) {
 
    for (let i = 0; i < self.ctx.data.length; i++) {
      const dataSource = self.ctx.data[i];
      
   
      const dataKeyName = dataSource.dataKey.name;
      
   
      const latestData = dataSource.data && dataSource.data.length > 0 ? 
                         dataSource.data[dataSource.data.length - 1] : null;
      
      if (latestData) {
        const value = latestData[1]; 
        
        if (dataKeyName === 'red') {
          redValue = value === true || value === "true";
        } else if (dataKeyName === 'green') {
          greenValue = value === true || value === "true";
        } else if (dataKeyName === 'yellow') {
          yellowValue = value === true || value === "true";
        }
      }
    }
    
    console.log("İşlenen değerler:", { red: redValue, green: greenValue, yellow: yellowValue });
  }
  
  const redEl = document.getElementById('redLight');
  const yellowEl = document.getElementById('yellowLight');
  const greenEl = document.getElementById('greenLight');
  
 
  if (redEl) redEl.style.backgroundColor = 'gray';
  if (yellowEl) yellowEl.style.backgroundColor = 'gray';
  if (greenEl) greenEl.style.backgroundColor = 'gray';

  if (redValue && redEl) {
    redEl.style.backgroundColor = 'red';
  }
  if (yellowValue && yellowEl) {
    yellowEl.style.backgroundColor = 'yellow';
  }
  if (greenValue && greenEl) {
    greenEl.style.backgroundColor = 'limegreen';
  }
}; 