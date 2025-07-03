// producer.js
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['192.168.29.59:9092'], // Replace with your Kafka broker(s)
})

const run = async () => {
  const producer = kafka.producer()
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [{ value: 'Hello KafkaJS user!' }],
  })
  await producer.disconnect()
  console.log("Message sent!")
}

run().catch(console.error)
