
import { Trophy, Target, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const PlayerStats = () => {
  // Mock data - will be replaced with Supabase data
  const playerStats = [
    {
      id: 1,
      name: "DragonSlayer",
      player_tag: "#ABC123",
      monthly: {
        avg_stars: 2.8,
        total_matches: 15,
        three_stars: 12,
        two_stars: 2,
        one_star: 1,
        avg_destruction: 94.2
      },
      overall: {
        avg_stars: 2.7,
        total_matches: 47,
        three_stars: 35,
        two_stars: 8,
        one_star: 4,
        avg_destruction: 92.8
      }
    },
    {
      id: 2,
      name: "ShadowHunter",
      player_tag: "#DEF456",
      monthly: {
        avg_stars: 2.9,
        total_matches: 14,
        three_stars: 13,
        two_stars: 1,
        one_star: 0,
        avg_destruction: 96.1
      },
      overall: {
        avg_stars: 2.8,
        total_matches: 45,
        three_stars: 38,
        two_stars: 5,
        one_star: 2,
        avg_destruction: 95.3
      }
    },
    {
      id: 3,
      name: "IceQueen",
      player_tag: "#GHI789",
      monthly: {
        avg_stars: 2.6,
        total_matches: 13,
        three_stars: 9,
        two_stars: 3,
        one_star: 1,
        avg_destruction: 89.7
      },
      overall: {
        avg_stars: 2.5,
        total_matches: 42,
        three_stars: 28,
        two_stars: 10,
        one_star: 4,
        avg_destruction: 88.9
      }
    },
    {
      id: 4,
      name: "FireMage",
      player_tag: "#JKL012",
      monthly: {
        avg_stars: 2.7,
        total_matches: 16,
        three_stars: 11,
        two_stars: 4,
        one_star: 1,
        avg_destruction: 91.5
      },
      overall: {
        avg_stars: 2.6,
        total_matches: 49,
        three_stars: 32,
        two_stars: 12,
        one_star: 5,
        avg_destruction: 90.2
      }
    }
  ];

  const getStarRating = (avgStars: number) => {
    if (avgStars >= 2.8) return { color: "text-green-400", rating: "Excellent" };
    if (avgStars >= 2.5) return { color: "text-yellow-400", rating: "Good" };
    if (avgStars >= 2.0) return { color: "text-orange-400", rating: "Average" };
    return { color: "text-red-400", rating: "Needs Improvement" };
  };

  const PlayerStatsCard = ({ player, period }: { player: any, period: 'monthly' | 'overall' }) => {
    const stats = player[period];
    const { color, rating } = getStarRating(stats.avg_stars);
    
    return (
      <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-white text-lg">{player.name}</CardTitle>
              <p className="text-gray-400 text-sm">{player.player_tag}</p>
            </div>
            <Badge className={`${color}`}>
              {rating}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Avg Stars</span>
                <span className={`font-bold ${color}`}>{stats.avg_stars}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Matches</span>
                <span className="text-white font-bold">{stats.total_matches}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Avg Destruction</span>
                <span className="text-purple-400 font-bold">{stats.avg_destruction}%</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                </div>
                <span className="text-white font-bold">{stats.three_stars}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-white font-bold">{stats.two_stars}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-gray-600" />
                  <Star className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-white font-bold">{stats.one_star}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                UwU eSports
              </span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/matches/scheduled" className="text-gray-300 hover:text-purple-400 transition-colors">Scheduled</Link>
              <Link to="/matches/past" className="text-gray-300 hover:text-purple-400 transition-colors">Past Matches</Link>
              <Link to="/players/stats" className="text-purple-400">Player Stats</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Player Statistics</h1>
          <p className="text-gray-400">Performance analytics for all clan members</p>
        </div>

        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/40 border border-purple-500/20">
            <TabsTrigger value="monthly" className="data-[state=active]:bg-purple-600">
              This Month
            </TabsTrigger>
            <TabsTrigger value="overall" className="data-[state=active]:bg-purple-600">
              All Time
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="monthly" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playerStats.map((player) => (
                <PlayerStatsCard key={player.id} player={player} period="monthly" />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="overall" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playerStats.map((player) => (
                <PlayerStatsCard key={player.id} player={player} period="overall" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {playerStats.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No player data available</h3>
            <p className="text-gray-500">Player statistics will appear after matches are recorded</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerStats;
