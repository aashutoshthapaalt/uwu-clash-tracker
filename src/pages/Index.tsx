
import { Calendar, Trophy, Users, Sword, Shield, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
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
              <Link to="/" className="text-purple-400">Home</Link>
              <Link to="/matches/scheduled" className="text-gray-300 hover:text-purple-400 transition-colors">Scheduled</Link>
              <Link to="/matches/past" className="text-gray-300 hover:text-purple-400 transition-colors">Past Matches</Link>
              <Link to="/players/stats" className="text-gray-300 hover:text-purple-400 transition-colors">Player Stats</Link>
              <Link to="/admin" className="text-gray-300 hover:text-purple-400 transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              UwU eSports
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Elite Clash of Clans clan dedicated to strategic warfare and competitive excellence. 
              Join our brotherhood of skilled attackers.
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <Badge className="bg-purple-600 text-white px-4 py-2 text-lg">
                <Trophy className="h-5 w-5 mr-2" />
                Champions League
              </Badge>
              <Badge className="bg-pink-600 text-white px-4 py-2 text-lg">
                <Users className="h-5 w-5 mr-2" />
                50/50 Members
              </Badge>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Sword className="h-6 w-6 mr-2 text-purple-400" />
                  War Record
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400 mb-2">247-23</div>
                <p className="text-gray-400">Wins - Losses</p>
                <div className="text-sm text-purple-300 mt-2">91.5% Win Rate</div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-purple-400" />
                  Defense Rating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-400 mb-2">98.2%</div>
                <p className="text-gray-400">Average Defense</p>
                <div className="text-sm text-purple-300 mt-2">Elite Fortress</div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="h-6 w-6 mr-2 text-purple-400" />
                  Attack Power
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-400 mb-2">94.7%</div>
                <p className="text-gray-400">Average Stars</p>
                <div className="text-sm text-purple-300 mt-2">Destruction Masters</div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/matches/scheduled">
              <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-white flex items-center group-hover:text-purple-400 transition-colors">
                    <Calendar className="h-6 w-6 mr-2" />
                    Scheduled Matches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">View upcoming clan wars and preparation schedules</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/matches/past">
              <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-white flex items-center group-hover:text-purple-400 transition-colors">
                    <Trophy className="h-6 w-6 mr-2" />
                    Past Matches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Review match history and performance analytics</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/players/stats">
              <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-white flex items-center group-hover:text-purple-400 transition-colors">
                    <Users className="h-6 w-6 mr-2" />
                    Player Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Individual player statistics and rankings</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
