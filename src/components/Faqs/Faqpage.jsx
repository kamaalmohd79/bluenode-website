import React, { useState } from 'react';
import FAQ from './Faq';
import './Faq.scss'

function FAQPage() {

    const faqsData = [
        { question: 'Q: What is BlueNode and how does it help me with passive cryptocurrency income?', answer: 'A: Welcome to BlueNode- a revolutionary blockchain-based residential proxy network designed on top of Solana- that shares your unused internet bandwidth with KYC-verified enterprises so that they can handle their voluminous traffic requests, bullfight the competition, expand their online presence, and more. In return, for every GigaByte of your unused internet bandwidth processed by BlueNode, you are rewarded with 200 BLU tokens. To put it in other words, BlueNode puts your unused bandwidth into the work and rewards you in crypto without any active involvement.' },
        { question: 'Q: How much I can earn from BlueNode Presale?', answer: "A: Presales opens the gate for anyone to buy the coins at a discounted price. Historically, early investments in cryptos have seen a massive return on their investment. For example, Ethereum's ICO took place in 2014, and the price per ETH token was approximately $0.30 USD during the presale. ETH is now trading in the current 2024 bull run at $3500. This is an ROI of 1,166,566.67%! This means that if you invested $10 USD during Ethereum's presale, it would have grown to approximately $116,666.67 USD based on the current price. Investing $100 would have made you a millionaire! According to financial analysts, easy onboarding, staking multiplier, buyback and burn, higher payouts, leaderboard, choice of technology, upcoming partnership with Global 2000 companies, and the idea of capitalizing the unused internet bandwidth will generate an ROI of 500% in the listing stage itself. Once the BLU token is rewarded to the users and will get into the active trading, it will become more and more valuable driving the value up anywhere between 1250% to 2500% at the current stage investment. " },
        { question: 'Q: What is BlueNode ID and when can I claim it? ', answer: "A: During the presale phase of BlueNode, each user who purchases BLU tokens will receive a special benefit: a unique BlueNode ID. This alphanumeric identifier, consisting of 16 characters, serves as a digital fingerprint that uniquely identifies each user within the BlueNode ecosystem. Once the presale fundraising round concludes, these BlueNode IDs will be airdropped to all participants. Subsequently, users will need to input their assigned BlueNode ID when installing the BlueNode extension. This personalized identification system ensures seamless integration and access to the BlueNode platform, enhancing user experience and enabling access to BlueNode's innovative features." },
        { question: 'Q: How much I can earn from the BlueNode extension (software)?', answer: 'A:  The users can earn anywhere between 1200 USD to 5000 USD worth of BLU tokens using the BlueNode extension. The earning threshold from the extension depends upon multiple factors discussed below: ‍1. Quality of Internet Connection: Users with stable and high-speed internet connections can share more bandwidth, leading to higher earnings.‍2. Amount of Unused Bandwidth: The more unused bandwidth a user shares, the more they can earn in BLU tokens.3. Consistency of Connection: Keeping the BlueNode extension active consistently allows for continuous sharing of unused bandwidth and maximizes earnings.' },
        { question: 'Q: What are other available methods to earn from BlueNode?', answer: 'A: The passive cryptocurrency earning model of BlueNode extends beyond the extension. The users can explore the following available methods: ‍1. Participation in the Staking Multiplier Program: Reinvesting earnings through the Staking Multiplier program can amplify rewards, increasing overall earnings.2. Referral Program: Encouraging others to join BlueNode through referral links can result in additional earnings from their activities.‍3. Monthly Ranking Mechanism: Striving to be among the top contributors in the monthly leaderboard can lead to extra BLU token rewards through exclusive airdrops.‍4. Engagement with Community: Active engagement with the BlueNode community, sharing experiences, and providing feedback can lead to opportunities for additional rewards or incentives.' },
        { question: 'Q: What is the difference between data and bandwidth?', answer: "A: Bandwidth and data are like North Pole and South Pole in the world networking. While bandwidth represents the capacity and speed of your internet connection, data embodies the actual content being transmitted or stored.BlueNode, our innovative platform, zeroes in on the underutilized potential of your internet bandwidth, not your data. We're solely dedicated to maximizing the efficiency of your bandwidth resources, ensuring they're put to good use without compromising your data privacy or security.So, when you join BlueNode, rest assured that we're all about optimizing your unused internet bandwidth while leaving your data untouched and secure. Your bandwidth becomes a valuable asset in our network ecosystem, powering a range of applications and services without ever accessing or interfering with your personal data. With BlueNode, it's all about making the most of your bandwidth." },
        { question: 'Q: How does BlueNode convert unused internet bandwidth into passive crypto income for users?', answer: 'A: Users share their unused internet bandwidth with BlueNode, which is then utilized by enterprises and KYC-verified companies for digital business expansion. These companies procure the additional bandwidth directly from BlueNode, paying on a per GB basis. The payments made by these companies are tokenized into BLU tokens and distributed directly to the users who share their bandwidth. The platform charges 30% of the fees on the reward distribution - 10% of which goes into liquidity, the remaining 10% goes into the treasury, and the balance 10% goes into buyback and burn. This process enables users to earn passive crypto rewards in $BLU tokens for sharing their unused bandwidth, offering a source of income without active involvement. Providers earn $BLU tokens based on the amount of unused internet bandwidth processed by the BlueNode extension.' },
        { question: 'Q: What blockchain technology does BlueNode use? ', answer: "A: BlueNode is built on top of the Solana as it offers several compelling advantages listed below: 1. High Throughput: Solana has demonstrated throughput levels surpassing 65,000 TPS in real-world conditions, far exceeding the transaction capacity of traditional blockchain networks. ‍2. Low Latency: Solana has demonstrated transaction confirmation times as low as 400-800 microseconds (0.4-0.8 milliseconds) under normal network conditions. ‍3. Scalability: Solana's scalability is unmatched, thanks to its innovative consensus mechanism (Proof of History) and parallel processing capabilities. ‍4. Cost-Effectiveness: On Solana, the average gas fee for a transaction typically ranges from $0.00001 to $0.0001 USD." },
        // Add more FAQ data as needed
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div className="faq-list">
      {faqsData.map((faq, index) => (
        <FAQ
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
    );
}

export default FAQPage;
