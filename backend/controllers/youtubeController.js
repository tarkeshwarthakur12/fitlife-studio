const axios = require('axios');

const getChannelVideos = async (req, res) => {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelHandle = process.env.YOUTUBE_CHANNEL_HANDLE || '@fitlife_studio';

    if (!apiKey || apiKey === 'YOUR_YOUTUBE_DATA_API_V3_KEY') {
      return res.json({
        success: true,
        source: 'mock',
        data: [
          {
            id: { videoId: '-kZjQdKqsh4' },
            snippet: {
              title: 'Transform Your Body: Complete Weight Loss & Fat Burning Workout',
              description: 'Join Tarakeshwar Thakur in this comprehensive session focusing on sustainable weight loss, calorie burn, and effective fat loss habits.',
              thumbnails: { high: { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80' } },
              publishedAt: '2026-03-01T08:00:00Z',
              category: 'Weight Loss'
            }
          },
          {
            id: { videoId: 'dQw4w9WgXcQ' },
            snippet: {
              title: 'The Ultimate Guide to Protein Intake for Muscle & Recovery',
              description: 'Understand why protein is vital for your metabolism, cellular recovery, and lean muscle maintenance during workouts.',
              thumbnails: { high: { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80' } },
              publishedAt: '2026-02-24T10:30:00Z',
              category: 'Protein Education'
            }
          },
          {
            id: { videoId: 'sample3' },
            snippet: {
              title: 'Morning Health Hacks to Supercharge Your Metabolism',
              description: 'Start your morning right with these 5 daily habits designed to elevate energy levels and prime your body for fat burning.',
              thumbnails: { high: { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80' } },
              publishedAt: '2026-02-18T07:15:00Z',
              category: 'Morning Health Hacks'
            }
          },
          {
            id: { videoId: 'sample4' },
            snippet: {
              title: 'Unhealthy Habits That Secretly Contribute to Weight Gain',
              description: 'Are you making these subtle lifestyle mistakes? Learn what to avoid to keep your fitness journey on track.',
              thumbnails: { high: { url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80' } },
              publishedAt: '2026-02-10T14:20:00Z',
              category: 'Healthy Habits'
            }
          }
        ]
      });
    }

    let channelId = process.env.YOUTUBE_CHANNEL_ID;
    if (!channelId) {
      const channelRes = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${channelHandle}&key=${apiKey}`);
      if (channelRes.data.items && channelRes.data.items.length > 0) {
        channelId = channelRes.data.items[0].id;
      }
    }

    if (!channelId) {
      return res.status(404).json({ success: false, message: 'YouTube channel not found via API' });
    }

    const searchRes = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=12`);
    
    res.json({
      success: true,
      source: 'live',
      data: searchRes.data.items
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getChannelVideos };