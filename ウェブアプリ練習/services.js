document.addEventListener('DOMContentLoaded', () => {
    const serviceList = document.getElementById('serviceList');
    const services = [
        { name: 'サービス1', description: '詳細な説明', image: 'images/service1.jpg' },
        { name: 'サービス2', description: '詳細な説明', image: 'images/service2.jpg' },
        { name: 'サービス3', description: '詳細な説明', image: 'images/service3.jpg' }
    ];

    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');
        const serviceImage = document.createElement('img');
        serviceImage.src = service.image;
        serviceImage.alt = service.name;
        const serviceName = document.createElement('h3');
        serviceName.textContent = service.name;
        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;
        serviceItem.appendChild(serviceImage);
        serviceItem.appendChild(serviceName);
        serviceItem.appendChild(serviceDescription);
        serviceList.appendChild(serviceItem);
    });
});
